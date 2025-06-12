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
  Inject,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookResponseDto } from './dto/book-response.dto';
import { IBookService, BOOK_SERVICE } from './interfaces/book-service.interface';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger'; // Importa los decoradores de Swagger

@ApiTags('books') // Etiqueta para agrupar todas las operaciones relacionadas con 'books'
@Controller('books')
export class BookController {
  constructor(
    @Inject(BOOK_SERVICE) private readonly bookService: IBookService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crea un nuevo libro en la base de datos' })
  @ApiBody({ type: CreateBookDto, description: 'Datos del libro a crear' })
  @ApiResponse({
    status: 201,
    description: 'El libro ha sido creado exitosamente.',
    type: BookResponseDto, // Especifica el tipo de la respuesta exitosa
  })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  async create(@Body() createBookDto: CreateBookDto): Promise<BookResponseDto> {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtiene una lista de todos los libros' })
  @ApiResponse({
    status: 200,
    description: 'Lista de libros recuperada exitosamente.',
    type: [BookResponseDto], // Especifica que la respuesta es un array de BookResponseDto
  })
  async findAll(): Promise<BookResponseDto[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtiene un libro específico por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID único del libro a buscar',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Libro encontrado y recuperado exitosamente.',
    type: BookResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Libro no encontrado.' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<BookResponseDto> {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualiza un libro existente por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del libro a actualizar',
    type: Number,
    example: 1,
  })
  @ApiBody({
    type: UpdateBookDto,
    description: 'Datos del libro a actualizar (campos parciales permitidos)',
  })
  @ApiResponse({
    status: 200,
    description: 'El libro ha sido actualizado exitosamente.',
    type: BookResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  @ApiResponse({ status: 404, description: 'Libro no encontrado para actualizar.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<BookResponseDto> {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminación exitosa sin retorno de datos
  @ApiOperation({ summary: 'Elimina un libro por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del libro a eliminar',
    type: Number,
    example: 1,
  })
  @ApiResponse({ status: 204, description: 'El libro ha sido eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Libro no encontrado para eliminar.' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.bookService.remove(id);
  }
}