export class reservation{

    resId:number = 0;
    hotelId:number = 0;
    roomId:number = 0;
    custId:number = 0;
    resAdults:number = 0;
    resKids:number = 0;
    resCheckIn!:Date;
    resCheckOut!:Date;
    resPrice:number = 0.00;
    resDiscount:number = 0;
    resNetValue:number = 0.00;
    resStatus:string = '';
    enteredOn!:Date;
}