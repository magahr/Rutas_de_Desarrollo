import { Controller, Param, Query, Get } from '@nestjs/common';


@Controller('customers')
export class CustomersController {

// primera forma de envio del get
@Get('customers/:customerId')
getcustomers(@Param() params: any) {
  return `customer estoy en el getcustomers ${params.customerId}`;
}
// segunda forma de envio del get
@Get('customerss/:customerId')
getcustomerss(@Param('customerId') customerId: string) {
  return `customero estoy getcustomerss ${customerId}`;
}

// usos del decorador query
@Get('customers')
getcustomers02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
) {
  return `customers: limit => ${limit} offset=> ${offset} brand=> ${brand}`;
}

}
