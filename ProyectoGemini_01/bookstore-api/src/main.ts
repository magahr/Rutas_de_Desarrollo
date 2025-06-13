// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // --- Configuración de CORS ---
  app.enableCors({
    origin: 'http://localhost:3001', // Normalmente Next.js usa el puerto 3000 por defecto en desarrollo
                                     // se va a usar el 3001, para no tener problemas con Next
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  // --- Fin de la configuración de CORS ---

  const config = new DocumentBuilder()
    .setTitle('Bookstore API')
    .setDescription('Documentación de la API para la gestión de libros en una librería.')
    .setVersion('1.0')
    .addTag('books', 'Operaciones relacionadas con la gestión de libros')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`Aplicación NestJS corriendo en: ${await app.getUrl()}`);
  console.log(`Documentación de Swagger disponible en: ${await app.getUrl()}/api/docs`);
}
bootstrap();