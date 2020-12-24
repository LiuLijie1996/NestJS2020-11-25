import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
    index(){
        return "这是共享模块中的common服务提供的数据";
    }
}
