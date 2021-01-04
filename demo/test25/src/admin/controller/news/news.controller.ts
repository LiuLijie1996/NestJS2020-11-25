import { Controller, Get } from '@nestjs/common';

import { ArticleService } from "../../service/article/article.service";

@Controller('news')
export class NewsController {
    constructor(private articleService: ArticleService){}
    @Get()
    index(){
        // 获取数据
        let data = this.articleService.findAll();
        console.log(data);
        
        return "我是admin模型里面的news控制器里面的方法";
    }
}

// alter user 'root'@'localhost' identified by '123456' password expire never;
// alter user 'root'@'localhost' identified with mysql_native_password by '123456';
// flush privileges;