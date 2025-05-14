import { Controller,
          Param,
          Query,
          Get,
          Post,
          Body,
          Delete,
          Put,
          HttpStatus,
          HttpCode,
          //ParseIntPipe este no va porque es el que viene con nest
          }
from '@nestjs/common';
/* 1.- ParseIntPipe (esto se coloca en el servidico y en el controlador*/
/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
/* 2.- Entity (esto se coloca en el servicio)*/
/* 3.- DTOs (esto se coloca en el controlador y en el servicio)*/
import { CreateOrderDto, UpdateOrderDto } from 'src/customers/dtos/orders.dtos';
/* 4.- Controler */
/* 5.- Servicio */
import { OrdersService } from 'src/orders/services/orders.service';

@Controller('orders')
export class OrdersController {

      constructor(private odersService: OrdersService) {
          }

// primera forma de envio del get
@Get('orders/:orderId')
@HttpCode(HttpStatus.ACCEPTED)
getorders(@Param('orderId', ParseIntPipe) orderId: number) {
  return this.odersService.findOne(orderId);
}

// usos del decorador query
@Get('orders')
getorders02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('order') order: string,
) {
  /*return `orders: limit => ${limit} offset=> ${offset} order=> ${order}`;*/
  return this.odersService.findAll();
}

@Post('orders')
create(@Body() payload: CreateOrderDto) {

  /*return {
        message: 'accion de crear en el orders',
        payload
  }*/
  return this.odersService.create(payload);

}

@Put('orders/:orderId')
update(@Param('orderId') orderId: number, @Body() payload: UpdateOrderDto) {

  //return {
  //      brandId,
  //      message: 'accion de modificación, en el modulo brand',
  //      payload
  return this.update(+ orderId, payload)
  }

@Delete('orders/:orderId')
Delete(@Param('orderId') orderId: number) {

  return 'Order Eliminada ' + this.odersService.delete(+orderId);
 }

}
