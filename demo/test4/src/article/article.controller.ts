import { Controller, Get, Render } from '@nestjs/common';
import { NewsService } from 'src/news/news.service';

@Controller('article')
export class ArticleController {
    // 注入newsService服务
    constructor(private newsService: NewsService){}

    // 访问 localhost:3000/article 时触发index1函数和它身上的所有装饰器
    @Get()
    @Render("default/article") // 显示 views/default/article 模板文件
    index1(){
        // 获取服务提供的数据
        let dataList = this.newsService.findAll();

        // 返回数据给前端
        return {
            data: dataList,
        }
    }
}
