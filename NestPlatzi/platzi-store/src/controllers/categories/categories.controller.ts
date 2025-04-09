import { Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put } from '@nestjs/common';

/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
@Controller('categories')
export class CategoriesController {

// Buscar en una categoria especifica un producto especifico
@Get('categories/:id/products/:productId')
getCategory(@Param('productId') productId: string, @Param('id') id: string) {
  return `product ${productId} and categoria ${id}`;
}

@Post('categorie')
create(@Body() payload: any) {

  return {
        message: 'accion de crear en el categorie',
        payload
  }
}

@Put('categories/:categorieId')
update(@Param('categorieId') categorieId: number, @Body() payload: any) {

  return {
        categorieId,
        message: 'accion de modificación, en el modulo categorie',
        payload
  }
}

@Delete('categories/:categorieId')
Delete(@Param('categorieId') categorieId: number) {

  return {
        categorieId,
        message: 'accion de borrado, en el modulo categorie'

  }

}











}



