import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class dtoFeedback {

    @IsNumber()
    @IsNotEmpty()
    property_id : number
    @IsNumber()
    rating:  number
    @IsNotEmpty()
    @IsString()
    comment: string
    @IsOptional()
    date_posted : Date
}