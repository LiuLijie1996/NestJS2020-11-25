import { All, Controller } from '@nestjs/common';
import { IndexService } from 'src/pansan-app/service/index/index.service';
import {AppService} from "src/app.service";

@Controller('pansanApp/api/index')
export class IndexController {
  
  // 在构造函数中注入服务
  constructor(private indexServer:IndexService, private appService:AppService){}

  // 访问 http://localhost:3000/pansanApp/api/index/banner
  @All('banner')
  index1() {
    // 使用服务提供的数据
    let data = this.indexServer.getBanner();

    return data;
  }

  // 访问 http://localhost:3000/pansanApp/api/index/index2
  @All("index2")
  index2(){
    // 使用根服务提供的数据
    let data = this.appService.getHello();

    return data;
  }
}
