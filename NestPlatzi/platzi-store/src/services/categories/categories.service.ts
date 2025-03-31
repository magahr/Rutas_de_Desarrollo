import { Injectable } from '@nestjs/common';
import { Category } from '../../entities/category.entity'

@Injectable()
export class CategoriesService {
    private category: Category[] = [
    { id: 1,
      name: 'Category 1',
      description: "Categoria Uno"
    }
    ]
}

