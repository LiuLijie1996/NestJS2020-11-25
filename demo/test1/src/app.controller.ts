import { Controller, Get } from '@nestjs/common';
// 1.引入服务
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 2.注入AppService服务
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // 3.获取服务返回的数据
    let data:string = this.appService.getHello();
    // 4.将数据返回给前端
    return data;
  }
}
