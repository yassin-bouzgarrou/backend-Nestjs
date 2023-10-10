import { IsBoolean,  IsNotEmpty,IsNumber,IsOptional, IsString } from "class-validator";


export class dtoroom{

    @IsNotEmpty()
    title:string;
    @IsString()
    @IsNotEmpty()          
    description:string;
    @IsNotEmpty()
    @IsNumber()
    price_per_night:number;
    @IsString()
    location:string
    @IsNumber()
    number_of_bedrooms: number;
    @IsNumber()
    number_of_bathrooms: number;
    @IsOptional()
    @IsString()
    property_image:      string;
    @IsBoolean()
    availability:  boolean

}