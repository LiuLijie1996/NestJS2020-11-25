import { Controller, Get, Param } from '@nestjs/common';

@Controller('news')
export class NewsController {

    // 访问：localhost:3000/news/123
    @Get(":id")
    index(@Param() param): string {
        // {id: 123}
        console.log(param);
        
        return "通过Param获取动态路由传值";
    }
}
