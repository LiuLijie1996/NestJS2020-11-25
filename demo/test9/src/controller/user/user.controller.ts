import { Controller, Get, Query, UsePipes } from '@nestjs/common';

// 在控制器中引入管道
import { UserPipe } from "../../pipe/user.pipe";
// 在控制器中引入 joi
import * as Joi from "@hapi/joi";

// joi文档地址：https://github.com/hapijs/joi
// 定义数据类型的规则
let userSchema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer().min(6).max(66).required(),
    sex: Joi.string().validate
});

@Controller('user')
export class UserController {

    @Get()
    @UsePipes(new UserPipe(userSchema)) // 将验证规则传入管道,然后通过UsePipes装饰器注册管道
    index(@Query() query) {

        console.log(`---------这是控制器打印的数据：${JSON.stringify(query)}---------`);

        return query;
    }
}
