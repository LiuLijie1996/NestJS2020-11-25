import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
    // 在浏览器输入 localhost:3000/article 即可访问
    @Get()
    index():string{
        return "这是文章页面";
    }

    // 在浏览器输入 localhost:3000/article/addArticle 即可访问
    @Get("addArticle")
    index2():string{
        return "这是添加文章页面";
    }
}
