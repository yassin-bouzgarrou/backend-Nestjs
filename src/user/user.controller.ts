import { Controller, Get, UseGuards,Req, Patch, Body, Param, Delete } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport"
import { Request } from 'express';
import { dtouser } from './dto/dto.user';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
constructor(private userSercie:UserService ){}
  @Get('info')
  getUserinfo(@Req() req :Request) {
    console.log(req);
    
    return req.user
    
  }
  @Patch("edit/:id")
  updateUser(@Param('id') id: string, @Body() user:dtouser ){
    return this.userSercie.edituser(id,user)

  }

  @Delete("delete")
  deleteUser(@Param("id") id:string ){
    

  }


}
