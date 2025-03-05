import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpStatus, HttpCode, Res, } from '@nestjs/common';
import { response, Response } from 'express';

import { ProductsService} from './../../services/products/products.service'
@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {
  }
// primera forma de envio del get
@Get('products/:productId')
@HttpCode(HttpStatus.ACCEPTED)
getProducts(@Res() respnse: Response, @Param('productId') productId: string) {
  //response.status(200).send(
  //   {
  //       message: `product ${productId}`,
  //   });
  return this.productsService.findOne(+productId);
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
     //return `productsss: limit => ${limit} offset=> ${offset} brand=> ${brand}`;
     return this.productsService.findAll();
}
@Post('products')
create(@Body() payload: any) {

  //return {
  //      message: 'accion de crear',
  //      payload
  //}
  return this.productsService.create(payload);


}
@Put('products/:id')
update(@Param('id') id: string, @Body() payload: any) {

  return this.productsService.update(+id, payload);

}

@Delete('products/:id')
Delete(@Param('id') id: number) {

  return id;
}







}
