import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {

// primera forma de envio del get
@Get('products/:productId')
getProducts(@Param() params: any) {
  return `producto ${params.productId}`;
}
// segunda forma de envio del get
@Get('products/:productId')
getProductss(@Param('productId') productId: string) {
  return `producto ${productId}`;
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






}
