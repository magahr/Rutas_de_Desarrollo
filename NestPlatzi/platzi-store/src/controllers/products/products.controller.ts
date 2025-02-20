import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpStatus, HttpCode, Res, } from '@nestjs/common';
import { response, Response } from 'express';

@Controller('products')
export class ProductsController {

// primera forma de envio del get
@Get('products/:productId')
@HttpCode(HttpStatus.ACCEPTED)
getProducts(@Res() respnse: Response, @Param('productId') productId: string) {
  response.status(200).send(
     {
         message: `product ${productId}`,
     });
}
// segunda forma de envio del get
@Get('productss/:productId')
getProductss(@Param('productId') productId: string) {
  return {
      message: `product ${productId}`

  };
}

// usos del decorador query
@Get('products')
getProducts02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
) {
  return `productsss: limit => ${limit} offset=> ${offset} brand=> ${brand}`;
}
@Post('products')
create(@Body() payload: any) {

  return {
        message: 'accion de crear',
        payload
  }
}
@Put('products/:productId')
update(@Param('productId') productId: number, @Body() payload: any) {

  return {
        productId,
        payload
  }
}

@Delete('products/:productId')
Delete(@Param('productId') productId: number) {

  return {
        productId,
        message: 'accion de borrado'

  }
}







}
