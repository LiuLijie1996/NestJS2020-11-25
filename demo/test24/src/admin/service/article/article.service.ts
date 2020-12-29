import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// 引入数据类型
import { Article } from 'src/interface/article.interface';

@Injectable()
export class ArticleService {
    // 注入Article数据模块
    constructor(@InjectModel("Article") private articleModel) { }

    // 查找数据
    async findAll(json: Article, fields?: String) {
        let result = await this.articleModel.find(json, fields).exec();
        return result;
    }

    // 增加数据
    async addData(json: Article) {
        let article = new this.articleModel(json);
        let result = await article.save();
        return result;
    }

    // 修改数据
    async updateData(json1: Article, json2: Article) {
        let result = await this.articleModel.updateOne(json1, json2);

        return result;
    }

    // 删除数据
    async deleteData(json: Article) {
        let result = await this.articleModel.deleteOne(json);
        return result;
    }
}
