import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

// primera forma de envio del get
@Get('users/:userId')
getusers(@Param() params: any) {
  return `user estoy en el getusers ${params.userId}`;
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




}
