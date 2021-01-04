import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "../../../entitys/article.entity";

@Injectable()
export class ArticleService {
    constructor(@InjectRepository(Article) private readonly articleRepository: Repository<Article>) { }

    async findAll(){
        return await this.articleRepository.find();
    }
}
