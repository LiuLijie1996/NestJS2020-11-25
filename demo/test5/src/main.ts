import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1、引入 cookie-parser
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2、配置cookie中间件（不加密保存）
  // app.use(cookieParser());

  // 配置cookie中间件（加密保存）
  app.use(cookieParser("this signed cookie"));

  await app.listen(3000);
}
bootstrap();
