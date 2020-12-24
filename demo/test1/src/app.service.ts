import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // 返回控制器想要的数据
    return 'Hello World!';
  }
}
