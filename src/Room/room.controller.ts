import { Controller, UseGuards, Param, Post, Body, Patch,Delete } from '@nestjs/common';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Get } from '@nestjs/common';
import { RoomService } from './room.service';
import { AuthGuard } from '@nestjs/passport';
import { dtoroom } from './dto/dtoroom';
import { RolesGuard } from 'src/auth/roles/roles.guard';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}
  @Get()
  Getall() {
    return this.roomService.getall();
  }

  @Get("/:id")
getHomeByUser(@Param('id') id:string){
  return this.roomService.GetHomeeByuserId(id)

}
 



// This route allows users with the role "HOST" in their token to post a new room.
  @Post('create/:id')
  @UseGuards(RolesGuard)
  @Roles('HOST')
  @UseGuards(AuthGuard('jwt'))
  posthomebyuser(@Param('id') id: string, @Body() rooms: dtoroom) {
    return this.roomService.postRoom(id,rooms)
  }


  @UseGuards(RolesGuard)
  @Roles('HOST')
  @Patch('udpate/:id')
  udpatehomebyuser(@Param('id') id: string, @Body() rooms: dtoroom) {
  return this.roomService.udpateRoom(id,rooms)
  }

  @UseGuards(RolesGuard)
  @Roles('HOST')
  @Delete("delete/:id")
  deleteRomm(@Param("id") id:string ){
    return this.roomService.DeleteRoom(id)
    

  }


}
