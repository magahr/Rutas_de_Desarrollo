import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CostumersService } from './services/costumers.service';

@Module({
     controllers: [CustomersController],
     providers: [CostumersService],

})
export class CustomersModule {}
