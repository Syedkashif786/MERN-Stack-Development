const checkPrime = (num) => {
    let prime = true;
    for( c = 2; c <= 100 ; c++){
        // let c =2;
        if(num % c == 0)
            console.log("Not Prime");
            prime = false;
            break;
    }

    if(prime){
        console.log('prime');
    }
}

checkPrime(100);



arr1 = [234, 243546, 2343, 5, 2, 23, 35, 42];
const filteredarr = arr1.filter((n) => {return n<100});
console.log(filteredarr);

let gadget = [
    {name : 'smartphone', price : 23000},
    {name : 'Laptop', price : 45000},
    {name : 'Tablet', price : 12000}
]
const newgadget = gadget.map((obj) => {return 'Rs' + obj.price});
console.log(newgadget);