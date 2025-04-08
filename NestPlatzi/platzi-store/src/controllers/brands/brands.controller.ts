import { Controller,
  Param,
  Query,
  Get,
  Post,
  Body,
  Put,
  Delete,
  /*ParseIntPipe, este es el propio de nest*/
} from '@nestjs/common';

import { CreateBrandDto } from 'src/dtos/brands.dtos';
/*este es el que cree en common parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
@Controller('brands')
export class BrandsController {

// primera forma de envio del get
/*@Get('brands/:brandId')
getbrands(@Param() params: any) {
  return `brand estoy en el getbrands ${params.brandId}`;
}*/
// segunda forma de envio del get
@Get('brands/:brandId')
getbrandss(@Param('brandId', ParseIntPipe) brandId: number) {
  return `Estoy en get brands brandid usando ParseIntPipe creado por el programador${brandId}`;
}

// usos del decorador query
@Get('brands')
getbrands02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
) {
  return `brands: limit => ${limit} offset=> ${offset} brand=> ${brand}`;
}
@Post('brands')
create(@Body() payload: CreateBrandDto) {

  return {
        message: 'accion de crear en el Brand',
        payload
  }
}

@Put('brands/:brandId')
update(@Param('brandId') brandId: number, @Body() payload: any) {

  return {
        brandId,
        message: 'accion de modificación, en el modulo brand',
        payload
  }
}

@Delete('brands/:brandId')
Delete(@Param('brandId') brandId: number) {

  return {
        brandId,
        message: 'accion de borrado, en el modulo brand'

  }

}

}
