const products = [

{
    id:1,name:'lenovo',price:65000
},
{
    id:2,name:'dell',price:45000
}
,
{
    id:3,name:'hp',price:40000
},
{
    id:4,name:'mac',price:150000
}


]

// Map
const output5 = products.map(product=>product.name );
console.log(output5);

// forEach

const output6 = products.forEach(product=> console.log(product.id));
// filter

const output7 = products.filter(prod=> prod.price>100000);
console.log(...output7);

// reduce

const output8 = products.reduce((p,c)=> p + c.price ,0)
console.log(output8);