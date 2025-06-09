// src/book/dto/create-book.dto.ts
import { IsString, IsNotEmpty, Length, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'El título no puede estar vacío.' })
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  @Length(3, 100, { message: 'El título debe tener entre 3 y 100 caracteres.' })
  title: string;

  @IsNotEmpty({ message: 'El autor no puede estar vacío.' })
  @IsString({ message: 'El autor debe ser una cadena de texto.' })
  author: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @Length(0, 500, { message: 'La descripción no puede exceder los 500 caracteres.' })
  description: string;

  @IsNotEmpty({ message: 'La fecha de publicación no puede estar vacía.' })
  @IsDateString({}, { message: 'La fecha de publicación debe ser una fecha válida (YYYY-MM-DD).' })
  publicationDate: string;
}