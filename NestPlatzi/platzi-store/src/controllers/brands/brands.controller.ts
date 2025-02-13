import { Controller, Param, Query, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

// primera forma de envio del get
@Get('brands/:brandId')
getbrands(@Param() params: any) {
  return `brand estoy en el getbrands ${params.brandId}`;
}
// segunda forma de envio del get
@Get('brandss/:brandId')
getbrandss(@Param('brandId') brandId: string) {
  return `brando estoy getbrandss ${brandId}`;
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

















}
