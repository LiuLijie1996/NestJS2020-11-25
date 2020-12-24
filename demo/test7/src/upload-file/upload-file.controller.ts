import { Body, Controller, Get, Post, Render, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { resolve } from "path";
import { createWriteStream } from "fs";

@Controller('upload-file')
export class UploadFileController {

    @Get('page1')
    @Render("index") //访问 localhost:3000/upload-file/page1 时渲染 views/index.ejs 模板
    page1() { }

    @Get('page2')
    @Render("index2") //访问 localhost:3000/upload-file/page2 时渲染 views/index2.ejs 模板
    page2() { }

    @Get('page3')
    @Render("index3") //访问 localhost:3000/upload-file/page3 时渲染 views/index3.ejs 模板
    page3() { }

    @Get('page4')
    @Render("index4") //访问 localhost:3000/upload-file/page4 时渲染 views/index4.ejs 模板
    page4() { }

    // 单文件上传
    @Post("upload1")
    @UseInterceptors(FileInterceptor('pic')) // <input type="file" name="pic">
    upload1(@Body() body, @UploadedFile() file) {
        // 获取传递的数据
        console.log(body);
        // 获取上传的文件
        console.log(file);
        // 保存文件
        this.saveFile(file);

        return {
            code: 200,
            msg: "上传成功"
        };
    }

    // 多个文件上传
    @Post("upload2")
    @UseInterceptors(FilesInterceptor("pic"))  // <input type="file" name="pic" multiple="multiple">
    upload2(@Body() body, @UploadedFiles() files) {
        // 获取传递的数据
        console.log(body);
        // 获取上传的文件
        console.log(files);

        files.forEach((file, index) => {
            // 保存文件
            this.saveFile(file);
        });

        return "上传成功";
    }

    // 多个文件上传：输入框name值不同
    @Post("upload3")
    @UseInterceptors(FileFieldsInterceptor([
        { name: "pic1" },
        { name: "pic2" },
        { name: "pic3" },
        { name: "pic4" },
        { name: "pic5" },
    ]))
    upload3(@Body() body, @UploadedFiles() files) {
        Object.keys(files).forEach((typeName, index) => {
            let file = files[typeName][0];
            // 保存文件
            this.saveFile(file);
        });

        return "上传成功";
    }

    // 多个文件上传：输入框name值不同
    @Post('upload4')
    @UseInterceptors(AnyFilesInterceptor())
    anyFile(@UploadedFiles() files) {
        files.forEach((file, index) => {
            // 保存文件
            this.saveFile(file);
        });

        return "上传成功";
    }

    // 保存文件
    saveFile(file) {
        // 设置文件名
        let fileName = new Date().getTime() + file.originalname;
        // 拼接出保存文件的路径
        let savePath = resolve(__dirname, "../../public/" + fileName);
        // 创建写入流
        let createWrite = createWriteStream(savePath);
        // 写入文件
        createWrite.write(file.buffer);
    }
}
