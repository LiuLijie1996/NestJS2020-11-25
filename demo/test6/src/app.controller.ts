import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  index1(@Request() req): string {
    // 设置session
    req.session.username = "小明";

    return this.appService.getHello();
  }

  @Get('getSession')
  index2(@Request() req){
    console.log(req.session.username);
    
    // 获取session
    return req.session.username;
  }

  @Get('destroySession')
  index3(@Request() req){
    // 销毁session
    req.session.destroy();

    return "session已经被销毁了";
  }
}
