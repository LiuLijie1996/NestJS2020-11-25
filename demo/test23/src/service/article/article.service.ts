import { Injectable } from '@nestjs/common';

// 引入 InjectModel
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleService {
    // @InjectModel('Article')  注入 Article 数据模块
    constructor(@InjectModel('Article') private readonly articleModel) {}

    // 获取数据库中所有文章
    async findAll(json={}){
        let result = await this.articleModel.find(json).exec();
        return result;
    }
}
