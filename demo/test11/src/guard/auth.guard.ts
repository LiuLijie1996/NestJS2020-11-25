import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    console.log("-------这是守卫文件-------");

    // 获取前端发起请求时的一些配置
    let getRequest = context.switchToHttp().getRequest();

    // 获取前端请求的路由
    console.log(getRequest.path);

    // 获取session
    console.log(getRequest.session);
    
    // 判断是否登录
    let isLogin = getRequest.session.isLogin;

    return isLogin;
  }
}
