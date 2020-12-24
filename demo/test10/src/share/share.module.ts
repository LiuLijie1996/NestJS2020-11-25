import { Module } from '@nestjs/common';

// 引入自己的服务
import { CommonService } from "./service/common/common.service";

@Module({
    providers: [CommonService],//导入自己的模块
    exports: [CommonService],//然后再导出自己的服务
})
export class ShareModule { }
