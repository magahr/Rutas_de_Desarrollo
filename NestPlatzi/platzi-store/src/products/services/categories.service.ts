import { Injectable, NotFoundException} from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';

@Injectable()
export class CategoriesService {
    private counterId = 1;
    private categories: Category[] = [
    { id: 1,
      name: 'Category 1',
      description: "Categoria Uno"
    }
    ];
    findAll() {
      return this.categories
    }
    findOne(id: number) {
        const category = this.categories.find((item) => item.id === id);

        if (!category) {
            throw new NotFoundException(`Categoria con ID ${id} no encontrado`);
        }

        return category;

      }
        create(payload: CreateCategoryDto) {
            console.log("este es un condosle ", payload)
            this.counterId = this.counterId + 1;
            const newCategory = {
                id: this.counterId,
                ...payload,
            };
            this.categories.push(newCategory);
            return newCategory;
        }

        delete(id: number) {
          const index = this.categories.findIndex(category => category.id === id);

          if (index === -1) {
            throw new NotFoundException(`Categoria con ID ${id} no encontrado`);
          }

          const deletedCategory = this.categories.splice(index, 1)[0];
          return deletedCategory;
        }
        update(id: number, payload: UpdateCategoryDto) {
             const product = this.findOne(id);
             if (product) {
                const index = this.categories.findIndex((item) => item.id === id);
                this.categories[index] ={
                    ...product,
                    ...payload,
                };
                return this.categories[index];
             }
             return null;
    }























}

