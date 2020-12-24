import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ArticlePipe implements PipeTransform {

  // value 是前端发送get或post携带过来的数据
  // metadata 是前端的请求类型，如果是get请求那么它的值就是 {type: query}
  // 在里面可以修改前端发送的数据以及验证数据的合法性
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`---------我是管道打印的数据：${JSON.stringify(value)}--------`)
    
    return value;
  }
}