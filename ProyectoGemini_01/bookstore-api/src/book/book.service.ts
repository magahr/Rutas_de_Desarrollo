// src/book/book.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookResponseDto } from './dto/book-response.dto';
import { IBookService } from './interfaces/book-service.interface'; // Importa la interfaz

@Injectable()
export class BookService implements IBookService { // ¡Implementa la interfaz!
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<BookResponseDto> {
    const newBook = this.booksRepository.create(createBookDto);
    const savedBook = await this.booksRepository.save(newBook);
    return this.mapToBookResponseDto(savedBook);
  }

  async findAll(): Promise<BookResponseDto[]> {
    const books = await this.booksRepository.find();
    return books.map(book => this.mapToBookResponseDto(book));
  }

  async findOne(id: number): Promise<BookResponseDto> {
    const book = await this.booksRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Libro con ID "${id}" no encontrado.`);
    }
    return this.mapToBookResponseDto(book);
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<BookResponseDto> {
    const book = await this.booksRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Libro con ID "${id}" no encontrado para actualizar.`);
    }
    this.booksRepository.merge(book, updateBookDto);
    const updatedBook = await this.booksRepository.save(book);
    return this.mapToBookResponseDto(updatedBook);
  }

  async remove(id: number): Promise<void> {
    const result = await this.booksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Libro con ID "${id}" no encontrado para eliminar.`);
    }
  }

  private mapToBookResponseDto(book: Book): BookResponseDto {
    const responseDto = new BookResponseDto();
    responseDto.id = book.id;
    responseDto.title = book.title;
    responseDto.author = book.author;
    responseDto.description = book.description;
    responseDto.publicationDate = book.publicationDate;
    return responseDto;
  }
}
