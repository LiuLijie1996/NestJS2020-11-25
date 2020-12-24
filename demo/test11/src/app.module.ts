import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PansanAppModule } from './pansan-app/pansan-app.module';

@Module({
  imports: [PansanAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
