import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../../entities/order.entity'
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';
@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    { id: 1,
      name: 'Order 1',
      description: 'Order 1'
    }];

    findAll() {
       return this.orders
    }

    findOne(id: number) {
      const order = this.orders.find((item) => item.id === id);

      if (!order) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }

      return order;
    }

    create(payload: CreateOrderDto) {
        console.log("este es un console ", payload)
        this.counterId = this.counterId + 1;
        const newOrder = {
            id: this.counterId,
            ...payload,
        };
        this.orders.push(newOrder);
        return newOrder;
    }

    delete(id: number) {
      const index = this.orders.findIndex(product => product.id === id);

      if (index === -1) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }

      const deletedProduct = this.orders.splice(index, 1)[0];
      return deletedProduct;
    }
    update(id: number, payload: UpdateOrderDto) {
         const product = this.findOne(id);
         if (product) {
            const index = this.orders.findIndex((item) => item.id === id);
            this.orders[index] ={
                ...product,
                ...payload,
            };
            return this.orders[index];
         }
         return null;

    }

}
