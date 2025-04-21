import { Controller,
         Get,
         Query,
         Param,
         Put,
         Delete,
         HttpStatus,
         HttpCode,
         Body } from '@nestjs/common';

/* 1.- ParseIntPipe (esto se coloca en el servidico y en el controlador*/
/**Esto se hizo a mano no es de Nest ver carpeta parse-int*/
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
/* 2.- Entity (esto se coloca en el servicio)*/
/* 3.- DTOs (esto se coloca en el controlador y en el servicio)*/
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
/* 4.- Controler */
/* 5.- Servicio */
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
      }

// primera forma de envio del get
@Get('users/:userId')
@HttpCode(HttpStatus.ACCEPTED)
getusers(@Param('userId', ParseIntPipe) userId: string) {
  return this.usersService.findOne(userId);
}
// segunda forma de envio del get
@Get('userss/:userId')
getuserss(@Param('userId') userId: string) {
  return `usero estoy getuserss ${userId}`;
}

// usos del decorador query
@Get('users')
getusers02(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('user') user: string,
) {
  return `users: limit => ${limit} offset=> ${offset} user=> ${user}`;
}

@Put('users/:userId')
update(@Param('userId') userId: number, @Body() payload: any) {

  return {
        userId,
        message: 'accion de modificación, en el modulo user',
        payload
  }
}

@Delete('userS/:userId')
Delete(@Param('userId') userId: number) {

  return {
        userId,
        message: 'accion de borrado, en el modulo user'

  }

}



}
