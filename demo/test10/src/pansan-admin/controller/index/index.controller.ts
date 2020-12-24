import { All, Controller } from '@nestjs/common';

// 引入共享的服务
import {CommonService} from "../../../share/service/common/common.service"

@Controller('pansan-admin/index')
export class IndexController {
    // 注入共享模块中的服务
    constructor(private commonService:CommonService){}

    // 访问：http://localhost:3000/pansan-admin/index
    @All()
    index(){
        // 获取共享模块的服务中的数据
        let data = this.commonService.index();

        return data;
    }
}
