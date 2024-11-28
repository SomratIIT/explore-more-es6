// Use of map => loops through each element of the array 
const numbers = [4,5,2,8,10];


// function doubleIt (num){
//     return num*2;
// }
const doubleIt =(num) => num * 2;
const final = numbers.map(doubleIt);

console.log(final);



/* const recap =[]


for(const num of numbers){
    const double = num*2;
recap.push(double);
}
console.log(recap); */