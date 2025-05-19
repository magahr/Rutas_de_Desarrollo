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
/*ParseIntPipe, este es el propio de nest*/
} from '@nestjs/common';
/* 1.- ParseIntPipe (esto se coloca en el servidico y en el controlador*/
/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
/* 2.- Entity (esto se coloca en el servicio)*/
/* 3.- DTOs (esto se coloca en el controlador y en el servicio)*/
import { CreateCustomerDto, UpdateCustomerDto } from 'src/users/dtos/customers.dtos';
/* 4.- Controler */
/* 5.- Servicio */
import { CostumersService } from 'src/users/services/costumers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CostumersService) {
       }

// segunda forma de envio del get
@Get('customerss/:customerId')
@HttpCode(HttpStatus.ACCEPTED)
getcustomerss(@Param('customerId', ParseIntPipe) customerId: number) {
  return this.customerService.findOne(customerId);
}

// usos del decorador query
@Get('customers')
getcustomers02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('customer') customer: string,
) {
  //return `customers: limit => ${limit} offset=> ${offset} customer=> ${customer}`;
  return this.customerService.findAll();
}

@Post('customers')
create(@Body() payload: CreateCustomerDto) {

  //return {
  //      message: 'accion de crear en el customers',
  //      payload
  return this.customerService.create(payload);
  }

@Put('customers/:id')
update(@Param('id') id: number, @Body() payload: UpdateCustomerDto) {

  return this.update(+ id, payload)
  }


@Delete('customers/:id')
Delete(@Param('id') id: number) {

  return  'Customer Eliminado' + this.customerService.delete(+id);

}

}
