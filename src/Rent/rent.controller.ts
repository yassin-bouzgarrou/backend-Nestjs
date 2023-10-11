import { Body, Controller,Param,Post,Get } from '@nestjs/common';
import { RentService } from './rent.service';
import { dtoBooking } from './dto/dto.booking';

@Controller('rent')
export class RentController {
constructor(private rentService : RentService){}
@Post()
bookingHousse(@Body()booking :dtoBooking){
return this.rentService.addbooking(booking)
}
@Get("/:id")
getbookingByUser(@Param("id") id:string){

    
   return this.rentService.getBookingbyUser(id)

}

}
