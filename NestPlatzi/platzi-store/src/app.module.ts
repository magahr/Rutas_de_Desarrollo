/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
/* import { CategoriesController } from './controllers/categories.controller';*/
import { CategoriesController } from './controllers/categories/categories.controller';
/*import { OrdersController } from './controllers/orders/orders.controller';*/
import { OrdersController } from './controllers/orders/orders.controller';


@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
