// src/book/book.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  title: string;

  @Column({ length: 100, nullable: false })
  author: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ type: 'date', nullable: false })
  publicationDate: Date;
}