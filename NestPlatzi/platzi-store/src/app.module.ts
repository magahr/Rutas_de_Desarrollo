
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './services/products/products.service';
import { OrdersService } from './services/orders/orders.service';
import { CostumersService } from './services/costumers/costumers.service';
import { CategoriesService } from './services/categories/categories.service';
import { UsersService } from './services/users/users.service';
import { BrandsService } from './services/brands/brands.service';


@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, CustomersController, OrdersController, BrandsController, UsersController],
  providers: [AppService, ProductsService, OrdersService, CostumersService, CategoriesService, UsersService, BrandsService],
})
export class AppModule {}
