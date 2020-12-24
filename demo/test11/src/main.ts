import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
// 引入 session
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 配置session中间件
  app.use(session({
    secret: "keyboard cat",//密钥
    rolling: true,//在每次请求时强行设置 cookie，这将重置 cookie 过期时间
    // 配置cookie
    cookie: {
      maxAge: 10 * 60 * 1000,//过期时间
      httpOnly: true,//只允许后端访问
    }
  }));

  // 配置静态目录
  app.useStaticAssets("public");

  // 配置模板路径
  app.setBaseViewsDir('views');
  // 配置模板引擎
  app.setViewEngine("ejs");


  await app.listen(3000);
}
bootstrap();
