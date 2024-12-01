class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }

    Study(ict){
        console.log(`I love to Teach ${ict}`);
    }
}

const Teach = new Teacher('Mahbub Sir','ICT');
console.log(Teach);
Teach.Study('ICT');

