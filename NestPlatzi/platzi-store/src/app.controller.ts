/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }
  @Get('nuevo')
  newEndpoint() {
    return 'yo soy un nuevo end point';
  }
  @Get('/ruta/')
  hello() {
    return 'con slas';
  }
  // primera forma de envio del get
  @Get('products/:productId')
  getProducts(@Param() params: any) {
    return `producto ${params.productId}`;
  }
  // segunda forma de envio del get
  @Get('productss/:productId')
  getProductss(@Param('productId') productId: string) {
    return `producto ${productId}`;
  }
  // Buscar en una categoria especifica un producto especifico
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and categoria ${id}`;
  }
}
