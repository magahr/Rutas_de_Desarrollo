// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Importamos SwaggerModule y DocumentBuilder
import { ValidationPipe } from '@nestjs/common'; // Asegúrate de importar ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar la tubería de validación globalmente
  // Esto es crucial para que class-validator funcione con tus DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no están en el DTO
      transform: true, // Transforma los tipos de datos a los del DTO
      forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
    }),
  );

  // --- Configuración de Swagger ---
  const config = new DocumentBuilder()
    .setTitle('Bookstore API') // Título de tu API
    .setDescription('Documentación de la API para la gestión de libros en una librería.') // Descripción de tu API
    .setVersion('1.0') // Versión de tu API
    .addTag('books', 'Operaciones relacionadas con la gestión de libros') // Añade una etiqueta para agrupar las rutas
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // 'api/docs' será la ruta donde se servirá la documentación interactiva
  // --- Fin de la configuración de Swagger ---

  await app.listen(3000);
  console.log(`Aplicación NestJS corriendo en: ${await app.getUrl()}`);
  console.log(`Documentación de Swagger disponible en: ${await app.getUrl()}/api/docs`);
}
bootstrap();