// src/book/book.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Inject, // ¡Nuevo! Para inyectar por token
} from '@nestjs/common';
// import { BookService } from './book.service'; // ¡Elimina esta línea si existe!
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookResponseDto } from './dto/book-response.dto';
import { IBookService, BOOK_SERVICE } from './interfaces/book-service.interface'; // ¡Importa la interfaz y el token!

@Controller('books')
export class BookController {
  constructor(
    // ¡Inyecta la interfaz usando el token!
    @Inject(BOOK_SERVICE) private readonly bookService: IBookService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async create(@Body() createBookDto: CreateBookDto): Promise<BookResponseDto> {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<BookResponseDto[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<BookResponseDto> {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<BookResponseDto> {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.bookService.remove(id);
  }
}