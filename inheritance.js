class vehicle{
    constructor(name,price){
        this.name= name;
        this.price= price;
    }

    move(){
        console.log('GAri chole na');
    }
}
class bus extends vehicle {
constructor(name,price,seat,ticketPrice)
{
    super(name,price);
    this.seat=seat;
    this.ticketPrice= ticketPrice;
}

}

class Truck extends vehicle{
    constructor(name,price,load){
        super(name,price);

        this.load= load;
    }  
}
const superBus = new bus('BMW','1CR',22,'22k');
console.log(superBus);