import { Module } from '@nestjs/common';
import { CustomersController } from '../users/controllers/customers.controller';
import { CostumersService } from '../users/services/costumers.service';

@Module({
     controllers: [CustomersController],
     providers: [CostumersService],

})
export class CustomersModule {}
