import { Injectable } from '@nestjs/common';
import { User } from '../../entities/users.entity'
@Injectable()
export class UsersService {
  private costumer: User[] = [
    { id: 1,
      name: 'Name User 1',
      lastname: 'Lastname User 1'
    }
    ]
}

