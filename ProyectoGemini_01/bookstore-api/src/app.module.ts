// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { BookModule } from './book/book.module'; // Asegúrate de importar tu BookModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // O 'mysql', 'postgres', 'mongodb', etc.
      database: 'db.sqlite', // Nombre de tu archivo de base de datos (para SQLite)
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // O una lista explícita de tus entidades, ej: [Book]
      synchronize: true, // ¡Solo usar en desarrollo! Crea el esquema de la DB automáticamente
    }),
    BookModule, // Asegúrate de que tu BookModule esté importado aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}