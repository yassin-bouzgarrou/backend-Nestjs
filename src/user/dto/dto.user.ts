import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
export class dtouser {

  
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  username: string;
  @IsString()
  @IsOptional()
  profile_picture: string;
  @IsNumber()
  @IsOptional()
  age: number;
}
