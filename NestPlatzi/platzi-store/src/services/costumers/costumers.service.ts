import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../../entities/customer.entity'
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;

  private costumers: Customer[] = [
      { id: 1,
        name: 'Name 1',
        lastname: 'Lastname 1'
      }];
      findAll() {
         return this.costumers
      }

      findOne(id: number) {
        const customer = this.costumers.find((item) => item.id === id);

        if (!customer) {
          throw new NotFoundException(`customer con ID ${id} no encontrado`);
        }

        return customer;
      }

      create(payload: CreateCustomerDto) {
          console.log("este es un consolog ", payload)
          this.counterId = this.counterId + 1;
          const newCustomer = {
            id: this.counterId,
            ...payload,
        };
          this.costumers.push(newCustomer);
          return newCustomer;
      }

      delete(id: number) {
        const index = this.costumers.findIndex(Customer => Customer.id === id);

        if (index === -1) {
          throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }

        const deletedProduct = this.costumers.splice(index, 1)[0];
        return deletedProduct;
      }
      update(id: number, payload: UpdateCustomerDto) {
           const Customer = this.findOne(id);
           if (Customer) {
              const index = this.costumers.findIndex((item) => item.id === id);
              this.costumers[index] ={
                  ...Customer,
                  ...payload,
              };
              return this.costumers[index];
           }
           return null;
          }
 }

