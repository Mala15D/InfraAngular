import { Employee } from "./Employee";
import { Room } from "./Room";

export class Booking{
    constructor(bookedRooms:Room[],public stakeholder:Employee,public purpose:string,public dateOfBooking:string,public participants:number){

    }
}