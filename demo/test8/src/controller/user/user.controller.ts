import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    index1(){
        return "user";
    }

    @Get('index2')
    index2(){
        return "user index2";
    }
}
