// src/book/interfaces/book-service.interface.ts
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { BookResponseDto } from '../dto/book-response.dto';

export interface IBookService {
  create(book: CreateBookDto): Promise<BookResponseDto>;
  findAll(): Promise<BookResponseDto[]>;
  findOne(id: number): Promise<BookResponseDto>;
  update(id: number, book: UpdateBookDto): Promise<BookResponseDto>;
  remove(id: number): Promise<void>;
}

export const BOOK_SERVICE = 'IBookService'; // Token de inyección
