import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import path, { extname, join } from 'path';
import * as fs from 'fs-extra';

@Controller('documents')
export class DocumentsController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('pdf'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const originalPDFName = file.originalname;
        const extension = extname(originalPDFName);

        try {
            const fileName = `${Date.now()}${extension}`;

            const filePath = join(__dirname, '..', '..', 'uploads', fileName);

            await fs.move(file.path, filePath);

            console.log(filePath);

            return { message: 'File uploaded successfully' };
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrió un error al guardar el archivo PDF.');
        }
    }
}
