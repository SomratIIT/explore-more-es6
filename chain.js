// data access
const data = [{id: 1,name : 'abul',address: 'kochu khet'}]

// console.log(data[0].address);
// bring out value of a item
const products = {
    count : 5000,
    data :[
        {id:1,name:'lenovo laptop',price:65000 },
        {id:2,name:'macbook',price:165000}
    ]
}
// console.log(products.data[1].price);

const user ={
    id:5001,
    name:'somrat',
    address:{
        street: {
            first:'54/1 uttor',
            second:'54/2 dokkhin'
        },
        city:'Dhaka'
    }
}
console.log(user.address.street.second);