import { Module } from '@nestjs/common';
import { IndexController } from './controller/index/index.controller';
import { NewsController } from './controller/news/news.controller';

// 引入自己创建的服务
import { NewsService } from './service/news/news.service';
import { IndexService } from './service/index/index.service';

// 引入根模块的服务
import { AppService } from "../app.service";

@Module({
  controllers: [IndexController, NewsController],//导入控制器
  providers: [NewsService, IndexService, AppService],//导入服务

})
export class PansanAppModule { }
