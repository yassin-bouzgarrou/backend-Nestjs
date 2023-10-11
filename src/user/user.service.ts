import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dtouser } from './dto/dto.user';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async edituser(user_id: string, user: dtouser) :Promise <{}>  {



    
    const updateuser = await this.prisma.user.update({
      where: {
        user_id: +user_id,
      },
      data: {
        ...user,
      },
    });
    return updateuser;
  }



}
