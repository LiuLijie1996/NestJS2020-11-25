import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PansanAppModule } from './pansan-app/pansan-app.module';
import { ShareModule } from './share/share.module';
import { PansanAdminModule } from './pansan-admin/pansan-admin.module';

@Module({
  imports: [PansanAppModule, ShareModule, PansanAdminModule],//导入模块
  controllers: [AppController],//导入控制器
  providers: [AppService],//导入服务
})
export class AppModule {}
