import { Controller,
  Query,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpStatus,
  HttpCode,
  Put } from '@nestjs/common';

//* 1.- ParseIntPipe (esto se coloca en el servidico y en el controlador*/
/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
/* 2.- Entity (esto se coloca en el servicio)*/
/* 3.- DTOs (esto se coloca en el controlador y en el servicio)*/
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
/* 4.- Controler */
/* 5.- Servicio */
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {
       }

// Buscar en una categoria especifica un producto especifico
@Get('categories/:id/products/:productId')
@HttpCode(HttpStatus.ACCEPTED)
getCategory(@Param('productId', ParseIntPipe) productId: number, @Param('id', ParseIntPipe), id: number) {
  //return `product ${productId} and categoria ${id}`;
  //verificar aqui como buscar los dos juntos id del producto mas el id de categoria
  return this.categoriesService.findOne(productId)
}
// usos del decorador query
@Get('categories')
getcategories02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('category') category: string,
) {
  //return `categorys: limit => ${limit} offset=> ${offset} category> ${category}`;
   return this.categoriesService.findAll();
}

@Post('categories')
create(@Body() payload: CreateCategoryDto) {

  /*return {
        message: 'accion de crear en el categorie',
        payload
  }*/
  return this.categoriesService.create(payload)
}

@Put('categories/:categorieId')
update(@Param('categorieId') categorieId: number, @Body() payload: UpdateCategoryDto) {

  /*return {
        categorieId,
        message: 'accion de modificación, en el modulo categorie',
        payload*/
  return this.update(+ categorieId, payload)
  }


@Delete('categories/:categorieId')
Delete(@Param('categorieId') categorieId: number) {

  /*return {
        categorieId,
        message: 'accion de borrado, en el modulo categorie'

  }*/
   return 'Categoria Eliminada ' + this.categoriesService.delete(+categorieId)

}

}











}



