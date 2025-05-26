import { Controller,
         Get,
         Query,
         Param,
         Put,
         Post,
         Delete,
         HttpStatus,
         HttpCode,
         Body } from '@nestjs/common';

//import { Injectable, NotFoundException} from '@nestjs/common';

/* 1.- ParseIntPipe (esto se coloca en el servidico y en el controlador*/
/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
/* 2.- Entity (esto se coloca en el servicio)*/
/* 3.- DTOs (esto se coloca en el controlador y en el servicio)*/
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
/* 4.- Controler */
/* 5.- Servicio */
import { UsersService } from '../services/users.service';


@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
      }

// primera forma de envio del get
@Get('users/:userId')
@HttpCode(HttpStatus.ACCEPTED)
getusers(@Param('userId', ParseIntPipe) userId: number) {
  return this.usersService.findOne(userId);
}
// segunda forma de envio del get
@Get('users/:userId')
getuserss(@Param('userId') userId: number) {
  //return `usero estoy getuserss ${userId}`;
  return this.usersService.findOne(userId);
}

/**inicio esto es para la integracion con el modulo users */
@Get('users/:userId/orders')
getOrders(@Param('userId', ParseIntPipe) userId: number) {
  //return `usero estoy getuserss ${userId}`;
  return this.usersService.getOderByUser(userId);
}
/**fin  esto es para la integracion con el modulo users */

// usos del decorador query
@Get('users')
getusers02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('user') user: string,
) {
  //return `users: limit => ${limit} offset=> ${offset} user=> ${user}`;
  return this.usersService.findAll();
}

@Post('users')
create(@Body() payload: CreateUserDto) {

  //return {
  //      message: 'accion de crear en el Brand',
  //      payload
  //}
  return this.usersService.create(payload);
}

@Put('users/:userId')
update(@Param('userId') userId: number, @Body() payload: UpdateUserDto) {

  /*return {
        userId,
        message: 'accion de modificación, en el modulo user',
        payload
  }*/
  return this.update(+userId, payload)
}

@Delete('users/:userId')
Delete(@Param('userId') userId: number) {

  /*return {
        userId,
        message: 'accion de borrado, en el modulo user'

  }*/
   return ' User Eliminada ' + this.usersService.delete(+ userId);
}



}
