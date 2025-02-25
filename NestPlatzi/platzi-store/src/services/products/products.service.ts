import { Injectable } from '@nestjs/common';

import { Product} from '../../entities/product.entity';

@Injectable()
export class ProductsService {
   private products: Product[] = [{
        id: 1,
        name:  'Product 1',
        description : 'bla bla',
        price: 122,
        image: '',
        stock: 12,
    }]







}
