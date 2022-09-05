// objects are used to store key value pairs.
let user = { name : 'Raju', age : 32, email : 'raju@mail.com', 'enroll-no' : 'ABC-123' }; 

let key = 'enroll-no';
console.log(user.email);
console.log(user['enroll-no']);
console.log(user[key]);
// console.log(user.name);
console.log(user['name']);
console.log(user);

console.log(user.address);
user.address = 'Lucknow - 226003';
console.log(user);

user.name = 'Shamu';
console.log(user);

let brand = 'Samsung'; 
let model = 'Galaxy S22'; 
let colors = ['White', 'Black', 'Gray','Red' ];
let price = 60000;

let smartphone = { brand, model, colors, price};
console.log(smartphone);
console.log(smartphone.colors[1]);

// 1. passing object as an argument to a function 
// const printDetails = (obj) =>{
//     console.log(obj.brand);
//     console.log(obj.model);
// }

// 2. passing object as an argument to a function 
const printDetails = ({brand, model}) =>{
    console.log(brand);
    console.log(model);
}


printDetails(smartphone);
// printDetails(); //this will throw error 

let myorders = [
    { id : 23456, name : 'T-Shirt' , price : 500},
    {id : 12356, name : 'Shirt' , price : 800},
    {id : 78966, name : 'Full-Shirt' , price : 1500},
] 

console.log(myorders);
console.log(myorders[1].name);

// WAP to filter the orders which are less than 1000 
const filteredmyorders = myorders.filter((obj) => {return obj.price<1000} ) ;
console.log(filteredmyorders);


