import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../../entities/order.entity'
import { Product} from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto} from './../../dtos/products.dtos';

@Injectable()
export class OrdersService {
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

      return product;
    }

    create(payload: CreateProductDto) {
        console.log("este es un condosle ", payload)
        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    delete(id: number) {
      const index = this.products.findIndex(product => product.id === id);

      if (index === -1) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }

      const deletedProduct = this.products.splice(index, 1)[0];
      return deletedProduct;
    }
    update(id: number, payload: UpdateProductDto) {
         const product = this.findOne(id);
         if (product) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] ={
                ...product,
                ...payload,
            };
            return this.products[index];
         }
         return null;

    }

}
