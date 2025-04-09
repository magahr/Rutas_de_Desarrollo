import { IsNumber, IsString, IsUrl, IsNotEmpty, IsNegative, IsPositive } from 'class-validator'
import { PartialType} from '@nestjs/mapped-types';


export class CreateUserDto {
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
/*Con PartialType extiende la misma validaciones de CreateUserDto*/
export class UpdateUserDto extends PartialType(CreateUserDto) {
/*readonly name?: string;
readonly description?: string;
readonly price?: number;
readonly image?: string;
readonly stock?: number*/
}

