import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('documents')
export class DocumentsController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('pdf'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);

        return { message: 'File uploaded successfully' }
    }
}
