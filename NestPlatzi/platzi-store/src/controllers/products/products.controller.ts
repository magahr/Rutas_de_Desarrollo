import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

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

// usos del decorador query
@Get('productsss')
getProductsss(@Query('limit') limit: number, @Query('offset') offset: number) {
  return `productsss: limit => ${limit} offset=> ${offset}`;
}

}
