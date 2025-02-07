<<<<<<< HEAD

import { Controller, Get, Param, Query } from '@nestjs/common';
=======
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
>>>>>>> dba40376aab1409f1425e73cee353f429eac2678
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

<<<<<<< HEAD
  @Get()
  getHello(): string {
    return 'Hola Mundo Bello';
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
 // usos del decorador query
 @Get('productsss')
 getProductsss(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `productsss: limit => ${limit} offset=> ${offset}`;
 }

}
=======
    @Get()
    getHello(): string {
      return 'Hola Mundito estoy en NestPlatzi';
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
>>>>>>> dba40376aab1409f1425e73cee353f429eac2678
