/**31/03/2025
 * esto lo hice yo
 */
import { User } from "./user.entity";
import { Product } from "src/products/entities/product.entity";
export class Order{
  date: Date;
  user: User;             /*el User es referente a la entidad que esta en el modulo de user.*/
  product: Product[];       /*el User es referente a la entidad que esta en el modulo de user.*/
}
