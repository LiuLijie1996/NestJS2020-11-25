import { Controller, Get } from '@nestjs/common';

// 引入服务
import { ArticleService } from 'src/service/article/article.service';

@Controller('admin/news')
export class NewsController {

    // 注入服务
    constructor(private articleService: ArticleService){}

    @Get()
    async index(){
        // 使用服务提供的数据
        let result = await this.articleService.findAll();
        return result;
    }
}
