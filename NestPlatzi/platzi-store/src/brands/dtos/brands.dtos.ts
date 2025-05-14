import { IsString, IsNotEmpty } from 'class-validator'
import { PartialType} from '@nestjs/mapped-types';

export class CreateBrandDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

/*Con PartialType extiende la misma validaciones de CreateBrandDto*/
export class UpdateBrandDto extends PartialType(CreateBrandDto) {
/*readonly name?: string;
readonly description?: string;
readonly price?: number;
readonly image?: string;
readonly stock?: number*/
}

