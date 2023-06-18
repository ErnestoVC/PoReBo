import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as mimeTypes from 'mime-types';
import * as fs from 'fs-extra';

@Controller('documents')
export class DocumentsController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('pdf'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        try {
            // Leer el archivo como un blob
            const fileData = fs.readFileSync(file.path);
      
            // Obtener el tipo MIME del archivo PDF
            const mimeType = mimeTypes.lookup(file.originalname) || 'application/pdf';
      
            // Aquí puedes implementar la lógica para manejar el archivo PDF como un blob
            console.log(fileData); // Ejemplo: Imprimir los datos del archivo como un blob
            console.log(mimeType); // Ejemplo: Imprimir el tipo MIME del archivo
      
            // Retornar una respuesta adecuada
            return { message: 'Archivo PDF recibido y convertido a Blob correctamente.' };
          } catch (err) {
            // Manejar el error en caso de que ocurra
            console.error(err);
            throw new Error('Ocurrió un error al procesar el archivo PDF.');
          }
    }
}
