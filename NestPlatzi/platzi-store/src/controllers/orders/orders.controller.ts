import { Controller, Param, Query, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

// primera forma de envio del get
@Get('orders/:orderId')
getorders(@Param() params: any) {
  return `order ${params.orderId}`;
}
// segunda forma de envio del get
@Get('orders/:orderId')
getorderss(@Param('orderId') orderId: string) {
  return `ordero ${orderId}`;
}

// usos del decorador query
@Get('orders')
getorders02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
) {
  return `orders: limit => ${limit} offset=> ${offset} brand=> ${brand}`;
}









}
