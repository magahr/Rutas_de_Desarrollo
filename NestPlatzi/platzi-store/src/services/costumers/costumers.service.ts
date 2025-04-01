import { Injectable } from '@nestjs/common';
import { Costumer } from '../../entities/customer.entity'

@Injectable()
export class CostumersService {
  private category: Costumer[] = [
    { id: 1,
      name: 'Name 1',
      lastname: 'Lastname 1'
    }
    ]
}

