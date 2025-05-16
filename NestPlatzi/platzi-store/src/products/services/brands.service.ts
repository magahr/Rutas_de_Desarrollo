import { Injectable, NotFoundException, Post } from '@nestjs/common';

import { Brand } from 'src/products/entities/brands.entity';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dtos';

@Injectable()
export class BrandsService {
    private counterId = 1;
    /**brands esta declarada en entity */
    private brands: Brand[] = [{
      id:           1,
      name:         '<Brand 1',
      description : 'Brand description',
   }];
   findAll() {
    return this.brands
   }
   findOne(id: number) {
   const brand = this.brands.find((item) => item.id === id);
   if (!brand) {
       throw new NotFoundException(`Brand con ID ${id} no encontrado`);
   }
      return brand;
   }
   /** CreateBrandDto, esta declarada en el dtos de Brand */
   create(payload: CreateBrandDto) {
      console.log("Este es el consolog, en el servicio Brand ", payload)
      this.counterId = this.counterId + 1;
      const newBrand = {
          id: this.counterId,
          ...payload,
      };
      this.brands.push(newBrand);
      return newBrand;
   }
   update(id: number, payload: UpdateBrandDto) {
      const brand = this.findOne(id);
      if (brand) {
        const index = this.brands.findIndex((item) => item.id === id);
        this.brands[index] ={
            ...brand,
            ...payload,
        };
        return this.brands[index];
      }
      return null;
   }
   delete(id: number) {
      const index = this.brands.findIndex(brand => brand.id === id);

      if (index === -1) {
        throw new NotFoundException(`Brand con ID ${id} no encontrado`);
      }

      const deletedProduct = this.brands.splice(index, 1)[0];
      return deletedProduct;
    }
}

