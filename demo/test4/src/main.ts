import {resolve} from "path";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 静态目录地址
  let publicPath = resolve(__dirname, "../public");
  // 模板目录地址
  let viewsPath = resolve(__dirname, "../views");


  // 配置静态目录
  app.useStaticAssets(publicPath);

  // 配置模板目录
  app.setBaseViewsDir(viewsPath);
  // 配置模板引擎
  app.setViewEngine("ejs")

  await app.listen(3000);
}
bootstrap();
