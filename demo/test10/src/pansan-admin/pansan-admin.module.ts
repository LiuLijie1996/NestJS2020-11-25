import { Module } from '@nestjs/common';
import { IndexController } from './controller/index/index.controller';

// 引入共享模块
import { ShareModule } from "../share/share.module"

@Module({
    imports: [ShareModule],//导入共享模块
    controllers: [IndexController],
})
export class PansanAdminModule { }
