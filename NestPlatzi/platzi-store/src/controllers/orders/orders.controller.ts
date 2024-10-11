import { Controller, Get, Param, Query} from '@nestjs/common';


@Controller('orders')
export class OrdersController {

// primera forma de envio del get
@Get('orders/orders/:orderId')
getOrders(@Param() params: any) {
  return `order ${params.productId}`;
}
// segunda forma de envio del get
@Get('orders/orders/:orderId')
getProductss(@Param('orderId') orderId: string) {
  return `order ${orderId}`;
}


}


