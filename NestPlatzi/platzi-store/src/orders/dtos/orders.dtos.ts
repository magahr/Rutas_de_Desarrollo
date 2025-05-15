import { IsString, IsNotEmpty } from 'class-validator'
import { PartialType} from '@nestjs/mapped-types';

export class CreateOrderDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

/*Con PartialType extiende la misma validaciones de CreateOrderDto*/
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
/*readonly name?: string;
readonly description?: string;
readonly price?: number;
readonly image?: string;
readonly stock?: number*/
}

