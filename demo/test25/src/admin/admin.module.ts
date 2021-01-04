import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';

// 服务
import { ArticleService } from './service/article/article.service';

// 配置model
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "../entitys/article.entity";
import { NewsController } from './controller/news/news.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Article]),],
    controllers: [UserController, NewsController],
    providers: [ArticleService]
})
export class AdminModule { }
