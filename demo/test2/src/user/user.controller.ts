import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    index(): string {
        return "用户中心页面";
    }

    // 访问 localhost:3000/user/add?name=小明&age=20
    @Get("add")
    index2(@Query() query): string {
        // 打印 {name:"小明", age: 20}
        console.log(query);

        return "通过Query装饰器获取路由传值";
    }

    // 访问 localhost:3000/user/edit?name=小明&age=20
    @Get("edit")
    index3(@Request() req): string {
        // 打印 {name:"小明", age: 20}
        console.log(req.query);

        return "通过Request装饰器获取路由传值";
    }

    // 使用post请求 localhost:3000/user/create
    @Post("create")
    index4(@Body() body): string {
        console.log(body);

        return "通过Body装饰器获取post传值"
    }

    // 访问 localhost:3000/user/xxx?id=666
    @Get("xxx")
    index5(@Query("id") id): string {
        // 打印 666
        console.log(id);

        return "通过Body装饰器获取post传值"
    }

    // 模糊匹配
    // 访问 localhost:3000/user/123.html
    @Get("*.html")
    index6(@Param() param): string {
        // 打印 { '0': '123' }
        console.log(param);
        
        return "模糊匹配";
    }
}
