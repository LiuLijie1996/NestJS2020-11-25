import { Module } from '@nestjs/common';
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';

// 引入 MongooseModule 用来注册数据模型的
import { MongooseModule } from "@nestjs/mongoose";
// 引入 ArticleSchema
import { ArticleSchema } from "../schema/article.schema";

// 服务
import { ArticleService } from './service/article/article.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      // 注册 article 数据Model
      {
        name: "Article",
        schema: ArticleSchema,
        collection: "article",
      },
    ]),
  ],
  controllers: [NewsController, UserController],
  providers: [ArticleService],//注册服务
})
export class AdminModule { }
