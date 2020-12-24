import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {

    newsList(){
        return [
            {
                title:"新闻1",
                content:"新闻内容"
            },
            //...
        ]
    }
}
