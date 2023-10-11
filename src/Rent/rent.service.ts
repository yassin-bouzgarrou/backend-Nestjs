import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dtoBooking } from './dto/dto.booking';

@Injectable()
export class RentService {
constructor(private primsa : PrismaService){}
addbooking(booking :dtoBooking){
const book  = this.primsa.booking.create({data:{
    ...booking,
    check_in_date:new Date(),

    check_out_date:new Date()


}})
return book
}

getBookingbyUser(id:string){
    const book = this.primsa.booking.findMany({
        where:{
            user_id :+id,
        },
    })
    return book

}


}
