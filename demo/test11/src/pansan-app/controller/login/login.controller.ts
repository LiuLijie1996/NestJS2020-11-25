import { Controller, Get, Render, Request } from '@nestjs/common';

@Controller('pansan-app/login')
export class LoginController {
    @Get()
    @Render("admin/login") //将 admin/login.ejs 作为模板
    index1(@Request() req){
        console.log('登录');
        req.session.isLogin = true;
    }

    @Get('destroy-login')
    index2(@Request() req){
        req.session.destroy();
        return "session已经被销毁了";
    }
}
