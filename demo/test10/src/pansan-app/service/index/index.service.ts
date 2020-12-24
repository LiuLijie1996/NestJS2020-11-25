import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
    // 获取轮播图
    getBanner(){
        return [
            {url:"http://www.xxx1.com/xxx.jpg"},
            {url:"http://www.xxx2.com/xxx.jpg"},
            //...
        ];
    }
}
