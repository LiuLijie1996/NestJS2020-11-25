import { All, Controller } from '@nestjs/common';

// 引入自己创建的服务
import { NewsService } from "../../service/news/news.service";

@Controller('pansanApp/api/news')
export class NewsController {

  // 注入服务
  constructor(private newsService:NewsService){}

  // http://localhost:3000/pansanApp/api/news/getIndexNewsList
  @All('getIndexNewsList')
  index1() {
    // 使用服务提供的数据
    let data = this.newsService.newsList();
    
    // 将数据返回给前端
    return data;
  }
}
