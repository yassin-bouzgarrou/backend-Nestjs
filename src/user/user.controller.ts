import { Controller, Get, UseGuards,Req } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport"
import { Request } from 'express';
@Controller('user')
export class UserController {
    @UseGuards(AuthGuard('jwt'))
  @Get('info')
  getMe(@Req() req :Request) {
    return req.user
    
  }
}
