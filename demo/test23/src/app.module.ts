import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

// 模块
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
    // 连接数据库
    MongooseModule.forRoot('mongodb://localhost:27017/eggcms', { useNewUrlParser: true }),

    // 注册模块
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
