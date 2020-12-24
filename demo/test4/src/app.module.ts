import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [],
  controllers: [AppController, NewsController, ArticleController],//引入控制器
  providers: [AppService, NewsService],//引入服务
})
export class AppModule {}
