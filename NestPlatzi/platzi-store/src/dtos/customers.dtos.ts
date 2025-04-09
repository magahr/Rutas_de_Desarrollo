import { IsNumber, IsString, IsUrl, IsNotEmpty, IsNegative, IsPositive } from 'class-validator'
import { PartialType} from '@nestjs/mapped-types';


export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @IsNegative()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
/*Con PartialType extiende la misma validaciones de CreateCustomerDto*/
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
/*readonly name?: string;
readonly description?: string;
readonly price?: number;
readonly image?: string;
readonly stock?: number*/
}

