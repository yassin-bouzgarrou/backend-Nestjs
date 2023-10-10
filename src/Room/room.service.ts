import { Injectable,ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dtoroom } from './dto/dtoroom';

import { Prisma } from '@prisma/client';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getall() {
    const rooms = await this.prisma.property.findMany();

    return rooms;
  }

  async GetHomeeByuserId(user_id: string){
    const Home = await this.prisma.property.findMany({
      where:{
        owner_id:+user_id
      }
    })
    return Home
  }

  async postRoom(user_id: string, rooms: dtoroom) {
    const room = await this.prisma.property.create({
      data: {
        owner_id: +user_id,
        ...rooms,
      },
    });

    return room;
  }

  async udpateRoom(property_id: string, rooms: dtoroom) {
    const roombyuser = await this.prisma.property.update({
      where: {
        property_id: +property_id,
      },
      data: {
        ...rooms,
      },
    });
    return roombyuser;
  }

  async DeleteRoom(property_id: string) {
    try {
      const deleted = await this.prisma.property.delete({
        where: {
          property_id: +property_id,
        },
      });

      return deleted;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new ForbiddenException(`Room with ID ${property_id} not found`);
        }
      }
    }
  }
}
