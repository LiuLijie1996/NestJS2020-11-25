import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    findAll(){
        return [
            {
                name:"小明",
                age:20,
            },
            {
                name:"小红",
                age:20,
            },
            {
                name:"小美",
                age:20,
            },
        ]
    }
}
