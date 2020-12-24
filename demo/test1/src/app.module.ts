import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],//引入控制器
  providers: [AppService],//引入服务
})
export class AppModule {}
