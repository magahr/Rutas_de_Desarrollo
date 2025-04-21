import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../entities/users.entity'
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    { id: 1,
      name: 'Name User 1',
      lastname: 'Lastname User 1'
    }];

    findAll() {
      return this.users
    }

    findOne(id: number) {
      const user = this.users.find((item) => item.id === id);

      if (!user) {
        throw new NotFoundException(`user con ID ${id} no encontrado`);
      }
        return user;
    }

    create(payload: CreateUserDto) {
        console.log("Console log en User ", payload)
              this.counterId = this.counterId + 1;
              const newUser = {
                  id: this.counterId,
                  ...payload,
              };
              this.users.push(newUser);
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

