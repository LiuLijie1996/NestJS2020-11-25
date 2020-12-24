import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("default/index") //访问 lacalhost:3000 时渲染 views/default/index.ejs
  getHello() {
    // 传给模板的数据
    return {
      name: "小明",
      age: 20,
    };
  }
}
