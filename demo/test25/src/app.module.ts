import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 引入 orm 模块
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    // 配置数据库连接
    TypeOrmModule.forRoot({
      type: "mysql",//操作什么数据库
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "nest",//哪个数据库
      entities: [__dirname + "/**/*.entity{.ts, .js}"],//实体目录
      synchronize: true,
    }),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
