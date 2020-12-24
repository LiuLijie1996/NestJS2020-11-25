import { Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    index1(){
        return "news";
    }

    @Get('index2')
    index2(){
        return "news index2";
    }
}
