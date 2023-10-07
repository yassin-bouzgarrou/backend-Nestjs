import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class authdto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
