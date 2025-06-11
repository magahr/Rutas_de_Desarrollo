// src/book/book.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { BOOK_SERVICE } from './interfaces/book-service.interface'; // ¡Importa el token!

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [
    // ¡Define cómo se resuelve el token de la interfaz!
    {
      provide: BOOK_SERVICE,
      useClass: BookService,
    },
  ],
  exports: [BOOK_SERVICE], // Exporta el token si otros módulos necesitarán esta interfaz
})
export class BookModule {}