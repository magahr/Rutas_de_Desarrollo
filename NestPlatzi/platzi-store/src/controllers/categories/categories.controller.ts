import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

// Buscar en una categoria especifica un producto especifico
@Get('categories/:id/products/:productId')
getCategory(@Param('productId') productId: string, @Param('id') id: string) {
  return `product ${productId} and categoria ${id}`;
}

@Post('categories')
create(@Body() payload: any) {

  return {
        message: 'accion de crear en el categories',
        payload
  }
}


}



