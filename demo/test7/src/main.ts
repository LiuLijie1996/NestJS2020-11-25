import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 配置静态目录
  app.useStaticAssets("public");

  // 配置模板地址
  app.setBaseViewsDir("views");
  // 配置模板引擎
  app.setViewEngine("ejs");

  await app.listen(3000);
}
bootstrap();
