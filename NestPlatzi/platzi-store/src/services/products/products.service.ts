import { Injectable, NotFoundException, Post } from '@nestjs/common';

import { Product} from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto} from './../../dtos/products.dtos';
@Injectable()
export class ProductsService {
   private counterId = 1;
   /**Product esta en entity */
   private products: Product[] = [{
        id: 1,
        name:  'Product 1',
        description : 'bla bla',
        price: 122,
        image: '',
        stock: 12,
    }];
    findAll() {
       return this.products
    }

    findOne(id: number) {
      const product = this.products.find((item) => item.id === id);

      if (!product) {
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

      /* Generado con la DeepSeek
      const index = this.products.findIndex(product => product.id === id);

      if (index === -1) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }

      const updatedProduct = {
        ...this.products[index],  // Mantenemos propiedades existentes
        ...payload,               // Aplicamos los cambios
        id: id                    // Forzamos a mantener el ID original
      };

      this.products[index] = updatedProduct;
      return updatedProduct;
      */

    }

}
