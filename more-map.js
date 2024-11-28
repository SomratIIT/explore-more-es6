const numbers =[10,20,30];

const result = numbers.map(n=>n*n);

console.log(result);

const half = numbers.map(n=> n/2);
console.log(half);
// More Map functionality
const friends = ['Tom','John','Micheal','Oliver'];

const lengths = friends
.map(frnd =>frnd.length);

console.log(lengths);

const firstLetter = friends.map(friend=>friend[0]);
console.log(firstLetter);