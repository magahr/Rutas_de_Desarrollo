/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /*elimina los campos extras que el usuario envia por el json y los ignora*/
      whitelist: true,
      /*elimina los campos extras que el usuario envia por el json pero no lo ingnora
      enviando un mensaje de error, alertando*/
      forbidNonWhitelisted: true

    }),);
  await app.listen(3001);
}
bootstrap();
