const products = [

    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:45000},
    {id:3,name:'hp',price:40000},
    {id:4,name:'mac',price:150000}
]

// class

class Product{

// Special function
constructor(name){
this.name = name;
}    
speak(talk)    //Declaring Function without the 'function' keyword     
{
    console.log(`talking about ${talk}`);
}
}
const lenovo = new Product(`Hudai`);
console.log(lenovo);
lenovo.speak('Nothing');


class Teacher {

    lecture(ict){
        console.log(`I am a ${ict} Teacher`)
    }

    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
}
const Teach = new Teacher('somrat','ICTIIT');
Teach.lecture('ICT');
console.log(Teach);
