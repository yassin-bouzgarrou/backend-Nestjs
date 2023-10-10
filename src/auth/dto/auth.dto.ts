import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { UserRole } from './role';

export class authdto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  role:UserRole 
}
