import { Controller, Get } from '@nestjs/common';

// 引入服务
import { UserService } from 'src/service/user/user.service';

@Controller('admin/user')
export class UserController {
    // 注入服务
    constructor(private userService: UserService) { }

    @Get()
    async index1() {
        // 使用服务提供的数据
        let result = await this.userService.findAll();
        return result;
    }
}
