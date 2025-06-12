// src/book/dto/book-response.dto.ts
import { ApiProperty } from '@nestjs/swagger'; // Importa ApiProperty

export class BookResponseDto {
  @ApiProperty({
    description: 'ID único del libro',
    example: 1,
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: 'Título del libro',
    example: 'Cien años de soledad',
  })
  title: string;

  @ApiProperty({ description: 'Autor del libro', example: 'Gabriel García Márquez' })
  author: string;

  @ApiProperty({
    description: 'Descripción detallada del libro',
    example: 'Una novela épica que define el realismo mágico.',
  })
  description: string;

  @ApiProperty({
    description: 'Fecha de publicación del libro',
    example: '1967-05-30T00:00:00.000Z',
    type: String, // Se mostrará como string ISO 8601 en la respuesta
    format: 'date-time',
  })
  publicationDate: Date;
}