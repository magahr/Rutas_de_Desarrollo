/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundito..... pa lante!';
  }
  // eslint-disable-next-line prettier/prettier
}
