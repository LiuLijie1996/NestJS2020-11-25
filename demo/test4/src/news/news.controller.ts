import { Controller, Get, Render } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    // 注入 NewsService 服务实例
    constructor(private newsService: NewsService) { }

    // 访问 localhost:3000/news 时触发index1方法以及它身上的装饰器
    @Get()
    @Render("default/news") //显示 views/default/news 模板页面
    index1() {
        // 获取服务提供的数据
        let dataList = this.newsService.findAll();
        // 返回数据给前端
        return {
            data: dataList
        };
    }
}
