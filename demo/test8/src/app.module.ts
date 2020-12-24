import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';

// 在模块中引入中间件
import {InitMiddleware} from "./middleware/init.middleware";
import {UserMiddleware} from "./middleware/user.middleware";

// 函数式中间件
function logger(req, res, next){
  console.log("函数式中间件");
  next();
}

@Module({
  imports: [],//引入模块
  controllers: [AppController, UserController, NewsController],//引入控制器
  providers: [AppService],//引入服务
})
export class AppModule {
  constructor(){
    console.log("主模块");
  }

  configure(consumer: MiddlewareConsumer){
    // 配置中间件
    consumer
      .apply(InitMiddleware, logger) // 注册中间件
      // .forRoutes("*"); // 访问所有路由使用中间件
      // .forRoutes("user"); // 访问指定路由使用中间件
      .forRoutes(
        {path:"news", method: RequestMethod.GET},//访问news路由并且是get请求方式时使用中间件
        {path:"user", method: RequestMethod.GET},//当访问user路由时使用中间件
      )
      .apply(UserMiddleware)//再注册一个中间件
      .forRoutes("user") //当访问user路由时使用中间件
  }
}
