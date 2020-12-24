import { Module } from '@nestjs/common';
import { IndexController } from './controller/index/index.controller';
import { LoginController } from './controller/login/login.controller';

@Module({
  controllers: [IndexController, LoginController]
})
export class PansanAppModule {}
