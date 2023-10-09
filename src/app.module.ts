import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RoomModule } from './room/room.module';
import { RentModule } from './rent/rent.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, RoomModule, RentModule, PrismaModule, ConfigModule.forRoot({
    isGlobal:true
  }), UserModule],


})
export class AppModule {}
