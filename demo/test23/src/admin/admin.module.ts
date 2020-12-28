import { Module } from '@nestjs/common';

// 控制器
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';

// 引入 MongooseModule 用来注册数据模型的
import { MongooseModule } from "@nestjs/mongoose";

// 引入表规则
import { ArticleSchema } from "../schema/article.schema";
import { UserSchema } from "../schema/user.schema";


// 引入服务
import { ArticleService } from 'src/service/article/article.service';
import { UserService } from "src/service/user/user.service"

@Module({
    imports: [
        MongooseModule.forFeature([
            // 注册 article 数据Model
            {
                name: "Article",
                schema: ArticleSchema,
                collection: "article",
            },

            // 注册 User 数据Model
            {
                name: "User",
                schema: UserSchema,
                collection: "user",
            },
        ]),
    ],
    controllers: [NewsController, UserController],
    providers: [ArticleService, UserService],//注册服务
})
export class AdminModule { }
