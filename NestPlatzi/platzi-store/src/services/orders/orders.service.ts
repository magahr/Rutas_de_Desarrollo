import { Injectable } from '@nestjs/common';
import { Order } from '../../entities/order.entity'


@Injectable()
export class OrdersService {
private oreder: Order[] = [
    { id: 1,
      name: 'Order 1',
      description: 'Order 1'
    }
    ]
}

