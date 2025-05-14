
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './products/controllers/categories.controller';
import { CustomersController } from './customers/controllers/customers.controller';
import { OrdersController } from './orders/controllers/orders.controller';
import { BrandsController } from './brands/controllers/brands.controller';
import { UsersController } from './users/controllers/users.controller';
import { ProductsService } from './products/services/products.service';
import { OrdersService } from './orders/services/orders.service';
import { CostumersService } from './customers/services/costumers.service';
import { UsersService } from './users/services/users.service';
import { BrandsService } from './brands/services/brands.service';
import { BrandsModule } from './brands/brands.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BrandsModule, CustomersModule, OrdersModule, ProductsModule, UsersModule],
  controllers: [AppController, CategoriesController, ProductsController, CustomersController, OrdersController, BrandsController, UsersController],
  providers: [AppService, ProductsService, OrdersService, CostumersService, CategoriesService, UsersService, BrandsService],
})
export class AppModule {}
