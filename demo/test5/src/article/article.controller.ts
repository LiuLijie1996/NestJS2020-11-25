import { Controller, Get, Request, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {

    @Get()
    index1(@Response() res) {
        // 设置 cookie
        res.cookie(
            "username", //key
            "我是Cookie", //value
            {
                maxAge: 1000 * 60 * 10,//设置cookie存储时间
                httpOnle: true,//只允许后端访问
                signed: true,//cookie是否加密（true表示加密保存，但是再配置cookie中间件时需要传入任意字符作为密钥）
            },
        );

        // 如果使用了 Response 装饰器后，就不能直接通过 return 的方式给前端返回数据了
        // return "这是文章页面";

        // 只能通过 res.send 给前端响应数据
        res.send({
            code: 200,
            msg: "这是文章页面",
        });
    }


    @Get("getCookie")
    index2(@Request() req) {
        // 没有加密时获取Cookie
        // return req.cookies.username;

        // cookie被加密时获取cookie
        return req.signedCookies.username;
    }
}
