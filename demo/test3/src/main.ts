import { resolve } from "path";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 引入http平台
import { NestExpressApplication } from "@nestjs/platform-express";
import ejs from "ejs";

async function bootstrap() {
  // 创建服务实例
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 获取静态目录地址
  let publicPath: string = resolve(__dirname, "../public");
  // 配置静态资源目录
  app.useStaticAssets(publicPath);

  console.log(ejs);
  

  // 配置模板目录
  app.setBaseViewsDir("views");
  // 配置模板引擎
  app.setViewEngine("ejs");

  // 监听端口
  await app.listen(3000);
}
bootstrap();
