// 1. Map is a function of array 
// 2. Map returns a new array 

arr1 = [23 ,5, 2, 5, 26, 3];

const newNums = arr1.map( (n) => { return n**2 });
console.log(newNums);

prices = [100, 99, 4724, 999, 3199];
// prices = [Rs100, Rs99, Rs4724, Rs999, Rs3199];

// const newPrice = prices.map( (n) => {return 'Rs' + n });
const newPrice = prices.map( n => 'Rs' + n );

console.log(newPrice);

const arr2 = [23, 43, 6, 8, 10, 3, 6, 27];
// Create a new Array where if old elements is even divide it by and if it is odd multiply by 2 
const newarr2= arr2.map((n) => { 
    if(n%2 == 0)
    return n/2;
    
    else
    return n*2;
    
});
console.log(newarr2);

const newArr2 = arr2.map( (n) => (n%2==0 ? n/2 : n*2) )
console.log(newArr2);

// const arr2 = [23, 43, 6, 8, 10, 3, 6, 27];
// const filteredarr2 = arr2.filter((a) => {return a%2 != 0});
// console.log(filteredarr2);
const filteredarr2 = arr2.filter((a) => {return a%2 == 0});
console.log(filteredarr2);


