import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 引入函数式中间件
import {logger} from "./logger.middlewate";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置中间件
  // 在全局中只能使用函数式中间件
  app.use(logger);

  await app.listen(3000);
}
bootstrap();
