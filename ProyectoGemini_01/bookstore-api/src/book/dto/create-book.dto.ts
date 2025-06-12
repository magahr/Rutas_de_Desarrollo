// src/book/dto/create-book.dto.ts
import { IsString, IsNotEmpty, Length, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importa ApiProperty

export class CreateBookDto {
  @ApiProperty({
    description: 'Título del libro',
    example: 'Cien años de soledad',
    minLength: 3,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'El título no puede estar vacío.' })
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  @Length(3, 100, { message: 'El título debe tener entre 3 y 100 caracteres.' })
  title: string;

  @ApiProperty({ description: 'Autor del libro', example: 'Gabriel García Márquez' })
  @IsNotEmpty({ message: 'El autor no puede estar vacío.' })
  @IsString({ message: 'El autor debe ser una cadena de texto.' })
  author: string;

  @ApiProperty({
    description: 'Descripción detallada del libro',
    example: 'Una novela que narra la historia de la familia Buendía a lo largo de siete generaciones.',
    maxLength: 500,
    required: false, // Es opcional ya que TypeORM lo marca como nullable: true
  })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @Length(0, 500, {
    message: 'La descripción no puede exceder los 500 caracteres.',
  })
  description: string;

  @ApiProperty({
    description: 'Fecha de publicación del libro (formato YYYY-MM-DD)',
    example: '1967-05-30',
    type: String, // Especifica el tipo como String ya que se espera un string ISO 8601
    format: 'date',
  })
  @IsNotEmpty({ message: 'La fecha de publicación no puede estar vacía.' })
  @IsDateString({}, { message: 'La fecha de publicación debe ser una fecha válida (YYYY-MM-DD).' })
  publicationDate: string;
}