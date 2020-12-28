import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel){}

    // 获取数据库中所有的用户
    async findAll(json = {}){
        let result = await this.userModel.find(json).exec();
        return result;
    }
}
