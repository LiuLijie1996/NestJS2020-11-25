import { All, Controller, Get, UseGuards } from '@nestjs/common';

// 引入守卫
import { AuthGuard } from "../../../guard/auth.guard";

@Controller('pansan-app/index')
// @UseGuards(AuthGuard)  //守卫可以在类上使用
export class IndexController {

    // 访问：http://localhost:3000/pansan-app/index
    @Get()
    @UseGuards(AuthGuard)  //守卫可以在类的方法上使用
    index() {
        return "你好，世界";
    }
    // 访问：http://localhost:3000/pansan-app/index/getIndex
    @Get("getIndex")
    index2() {
        return "哈哈哈";
    }
}
