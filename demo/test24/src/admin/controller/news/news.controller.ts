import { Controller, Get } from '@nestjs/common';

// 引入服务
import { ArticleService } from 'src/admin/service/article/article.service';

@Controller('admin/news')
export class NewsController {
    // 注入服务
    constructor(private articleService: ArticleService) { }

    // 查找数据
    @Get()
    async index1() {
        // 获取服务中的findAll方法返回的数据
        let result = await this.articleService.findAll(
            // 查找的数据
            {},

            // 需要的字段
            "title author_name"
        );

        // 返回数据给前端
        return result;
    }

    // 添加数据
    @Get('addData')
    async index2() {

        // 调用服务中增加数据的函数
        let result = await this.articleService.addData({
            title: "新的文章111",
            content: "新闻文章内容111",
            author_name: "小小",
        });

        // 返回新增的数据
        return result;
    }

    // 修改数据
    @Get("update")
    async index3() {
        let result = await this.articleService.updateData(
            { _id: "5feb41a1bdf70e408ce1e19d" },
            { title: "修改了新闻标题" }
        );

        return result;
    }

    // 删除数据
    @Get("delete")
    async index4() {
        let result = await this.articleService.deleteData({ _id: "5fe9e4229ab93f57800ff422" });
        return result;
    }
}
