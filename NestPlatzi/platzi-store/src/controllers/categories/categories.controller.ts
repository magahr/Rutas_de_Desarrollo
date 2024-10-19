import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories/categories')
export class CategoriesController {

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and categoria ${id}`;

  };
 }
