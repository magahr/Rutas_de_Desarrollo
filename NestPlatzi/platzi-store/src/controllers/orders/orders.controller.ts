import { Controller, Param, Query, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

// primera forma de envio del get
@Get('orders/:orderId')
getorders(@Param() params: any) {
  return `order estoy en el getorders ${params.orderId}`;
}
// segunda forma de envio del get
@Get('orderss/:orderId')
getorderss(@Param('orderId') orderId: string) {
  return `ordero estoy getorderss ${orderId}`;
}

// usos del decorador query
@Get('orders')
getorders02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('order') order: string,
) {
  return `orders: limit => ${limit} offset=> ${offset} order=> ${order}`;
}









}
