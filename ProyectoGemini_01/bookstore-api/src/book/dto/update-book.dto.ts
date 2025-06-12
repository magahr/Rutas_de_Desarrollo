// src/book/dto/update-book.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
// No necesitas importar ApiProperty, ya que PartialType lo maneja automáticamente para las propiedades base.

export class UpdateBookDto extends PartialType(CreateBookDto) {}