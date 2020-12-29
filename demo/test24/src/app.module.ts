import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    // 连接数据库
    MongooseModule.forRoot('mongodb://localhost:27017/eggcms',{ useNewUrlParser: true }),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
