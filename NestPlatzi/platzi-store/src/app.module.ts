
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from '../../../products/controllers/products.controller';
import { CategoriesController } from '../../../products/controllers/categories.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from '../../../users/controllers/users.controller';
import { ProductsService } from '../../../products/services/products.service';
import { OrdersService } from './services/orders/orders.service';
import { CostumersService } from './services/costumers/costumers.service';
import { CategoriesService } from './services/categories/categories.service';
import { UsersService } from '../../../users/services/users.service';
import { BrandsService } from './services/brands/brands.service';


@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, CustomersController, OrdersController, BrandsController, UsersController],
  providers: [AppService, ProductsService, OrdersService, CostumersService, CategoriesService, UsersService, BrandsService],
})
export class AppModule {}
