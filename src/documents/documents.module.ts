import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { DocumentsController } from './documents.controller';

@Module({
  controllers: [DocumentsController],
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class DocumentsModule {}
