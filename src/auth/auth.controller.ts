import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authdto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService){}

@Post("singup")
singup(@Body()  users:authdto){
  return this.authService.singup(users)
}



@Post("signin")
signin(@Body()  users:authdto){
  return this.authService.singnin(users)

}

}
