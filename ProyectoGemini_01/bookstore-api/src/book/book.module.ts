import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';

@Module({
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
