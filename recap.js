
// Template String
const a=99;
const num = ['google','utube','netflix'];

const nayok ={
    name : 'sakib khan'
}

const message = `Hi, ${nayok.name} has ${a} access to ${num[1]}`;

console.log(message);


// Arrow funtion

const square = (x) => x * x;

const result = square(5);
console.log(result);

// destructuring 

const {x , y, ...rest} ={ x: 2, y:3, z:5 , name:'Somrat',age:25}

console.log(rest);
const friends = ['Rakib','Hasan','Somrat'];
const [first, ...rest1] = friends;

console.log(first);


//  Keys
const student = {
    name:'raj',
    age: 14,
    class: 'Six'
}

const keysall = Object.values(student);

console.log(keysall);