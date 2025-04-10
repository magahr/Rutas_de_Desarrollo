import { Controller,
  Param,
  Query,
  Get,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  /*ParseIntPipe, este es el propio de nest*/
} from '@nestjs/common';
/* 1.- ParseIntPipe (esto se coloca en el servidico y en el controlador*/
/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
/* 2.- Entity (esto se coloca en el servicio)*/
/* 3.- DTOs (esto se coloca en el controlador y en el servicio)*/
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
/* 4.- Controler */
/* 5.- Servicio */
import { BrandsService } from 'src/services/brands/brands.service';

@Controller('brands')
export class BrandsController {

   constructor(private brandservidce: BrandsService) {
    }
// segunda forma de envio del get
@Get('brands/:brandId')
@HttpCode(HttpStatus.ACCEPTED)
getbrandss(@Param('brandId', ParseIntPipe) brandId: number) {
  //return {
  //    message: `brand ${brandId}`
  //};
  return this.brandservidce.findOne(brandId);
}

// usos del decorador query
@Get('brands')
getbrands02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
) {
  //return `brands: limit => ${limit} offset=> ${offset} brand=> ${brand}`;
   return this.brandservidce.findAll();

}
@Post('brands')
create(@Body() payload: CreateBrandDto) {

  //return {
  //      message: 'accion de crear en el Brand',
  //      payload
  //}
  return this.brandservidce.create(payload);
}

@Put('brands/:brandId')
update(@Param('brandId') brandId: number, @Body() payload: UpdateBrandDto) {

  //return {
  //      brandId,
  //      message: 'accion de modificación, en el modulo brand',
  //      payload
  return this.brandservidce.update(+id, payload)



  }
}

@Delete('brands/:brandId')
Delete(@Param('id') id: number) {

  return {
        id,
        message: 'accion de borrado, en el modulo brand'

  }

}

}
