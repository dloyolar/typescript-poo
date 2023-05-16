import {
  IsEnum,
  IsNotEmpty,
  IsUrl,
  Length,
  validate,
  validateOrReject,
} from 'class-validator';

import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'aasdasd';
    dto.image = 'https://api.escuela.com/api/image';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
