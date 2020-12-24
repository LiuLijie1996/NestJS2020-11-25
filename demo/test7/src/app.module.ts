import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadFileController } from './upload-file/upload-file.controller';

@Module({
  imports: [],
  controllers: [AppController, UploadFileController],
  providers: [AppService],
})
export class AppModule {}
