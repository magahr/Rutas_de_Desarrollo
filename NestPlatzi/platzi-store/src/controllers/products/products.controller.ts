/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query} from '@nestjs/common';

@Controller('products/products')
export class ProductsController {

    // primera forma de envio del get
    @Get('products/products/:productId')
    getProducts(@Param() params: any) {
      return `producto ${params.productId}`;
    }
    // segunda forma de envio del get
    @Get('products/productss/:productId')
    getProductss(@Param('productId') productId: string) {
      return `producto ${productId}`;
    }
    

    // uso del get para querys video 8 de 23 - GET: parámetros query8 / 23
    @Get('productsQuery')
    getproductsQuery(@Query('limit') limit = 100,
                    @Query('offset') offset= 0,
                    @Query('brand') brand: string) {

      return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand} `;
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line prettier/prettier
    }









}
