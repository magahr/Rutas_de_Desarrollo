import { IsString, IsNotEmpty } from 'class-validator'
import { PartialType} from '@nestjs/mapped-types';


export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
/*Con PartialType extiende la misma validaciones de CreateCategoryDto*/
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
/*readonly name?: string;
readonly description?: string;
readonly price?: number;
readonly image?: string;
readonly stock?: number*/
}

