import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { ArticleController } from './controller/article/article.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
