class Person{
constructor(name,age)
{
    this.name = name;
    this.age= age;
}
sleep(){
    console.log(`${this.name} Ghumese Poreche`);
}
 
}
const kodom= new Person('Kodom Ali',33);
kodom.sleep();
