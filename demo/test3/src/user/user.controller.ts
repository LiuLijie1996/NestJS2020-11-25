import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
    // 访问 localhost:3000/user 时触发index1方法以及它身上的所有装饰器
    @Get()
    @Render("default/user") // 渲染 views/default/user.ejs 模板
    index1(){

    }

    // 访问 localhost:3000/user/login 时触发index2方法以及它身上的所有装饰器
    @Post("login")
    index2(@Body() body, @Response() res){
        // 获取post请求的数据
        console.log(body);
        
        // 重定向到根页面
        res.redirect("/");
    }
}
