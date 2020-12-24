// UsePipes 管道装饰器，用来注册管道的
import { Controller, Get, UsePipes, Query } from '@nestjs/common';

// 引入管道
import { ArticlePipe } from "../../pipe/article.pipe";

@Controller('article')
export class ArticleController {

    @Get()
    @UsePipes(new ArticlePipe) //注册管道
    index1(@Query() query){

        console.log(`-------我是控制器打印的数据：${JSON.stringify(query)}-------`);

        return query
    }

}
