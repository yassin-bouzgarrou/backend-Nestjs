import { Controller, Get, UseGuards,Req, Patch, Body, Param } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport"
import { Request } from 'express';
import { dtouser } from './dto/dto.user';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
constructor(private userSercie:UserService ){}
  @Get('info')
  getMe(@Req() req :Request) {
    return req.user
    
  }
  @Patch("edit/:id")
  updateUser(@Param('id') id: string, @Body() user:dtouser ){
    return this.userSercie.edituser(id,user)

  }


}
