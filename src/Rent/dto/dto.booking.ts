import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class dtoBooking {
    @IsNumber()
    @IsNotEmpty()
    user_id : number;
    @IsNumber()
    @IsNotEmpty()
    property_id :number;

    check_in_date: Date

    check_out_date :Date
    @IsNumber()
    @IsNotEmpty()
    total_price: number
}