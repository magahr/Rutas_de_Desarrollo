/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }
  @Get('nuevo')
  newEndpoint() {
    return 'yo soy un nuevo end point'
  }
  @Get('/ruta/')
  hello() {
    return 'con slas';
  }
  






}
