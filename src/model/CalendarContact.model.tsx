import {
    IsEmail,
    MinLength,
    IsPhoneNumber
} from 'class-validator';

export default class CalendarContactModel {
    @MinLength(1)
    company:string = "";

    @MinLength(1)
    firstName:string = "";
    
    @MinLength(1)
    lastName:string = "";

    @MinLength(1)
    address:string = "";

    @MinLength(1)
    city:string = "";

    @MinLength(1)
    plz:string = "";

    @MinLength(1)
    @IsPhoneNumber()
    land:string = "";

    @MinLength(1)
    @IsPhoneNumber()
    telephone:string = "";

    @MinLength(1)
    @IsEmail()
    email:string = "";
}