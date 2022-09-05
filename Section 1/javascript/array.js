const nums = [34, 67, 89, 5, 67, 77, 'kashif'];

console.log(nums);
console.log(typeof (nums));

// 1. Arrays can contain multiple type of Data 
// 2. Arrays support indexing - index starts from zero
// 3. Arrays are dynamic - size can be changed 
// 4. Arrays are mutable - can be changed 

const fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];

// Indexing 
console.log(fruits[0]);

// slicing - accessing multiple element 
console.log(fruits.slice(1,5));
// this will give all the elements to end 
console.log(fruits.slice(1));
// this will give all the elements to end  
console.log(fruits.slice(1));
// this will give undefined 
// console.log(fruits[100]);

// removing elements 
// fruits.splice(3, 2);
// console.log(fruits);

// adding new elements 
fruits.push('cherry');
console.log(fruits);

fruits.pop();
console.log(fruits);

// traverse using index 
console.log("- - - - - - - - - traverse using index - - - - - - ");
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//  traverse using for-of loop 
console.log("- - - - - - - - - traverse using for-of loop - - - - - - ");
for(let fr of fruits){
    console.log(fr);
}
// traverse using for-each function 
console.log("- - - - - - - - - traverse using for-each function - - - - - - ");

fruits.forEach((element) => {
    console.log(element);
})

// MAP 
const numbers = [2, 5, 7, 3, 5, 4, 3];

// WAP to square each number in abve array and store them in array 
let newNums = [];
for(let i of numbers){
    newNums.push(i*i);
}
console.log(newNums);


// Homework 

//wap to check the no is prime
const checkPrime = (x) => {

    // int = x;
    for (i = 2; i <= x - 1; i++)
        if (x % i == 0)
            break;

    if (i == x)
        console.log("Prime number");
    else
        console.log("Not a prime number");

}
checkPrime(199);



// Wap to check whether the number is palindrome 
const checkPalindrome  = (n) => {
    let org = n;
    let reverse = 0;

    while(n>0){
        // console.log(reverse);
        let r = n%10;
        reverse = reverse * 10 + r;
        n = Math.floor(n/10)

    }
    console.log(reverse);
    if(org == reverse)
    console.log("Palindrome");
    else
    console.log("not a palindrome");
}
checkPalindrome(7256467);
checkPalindrome(12321);

// WAP to find perfect square from 1 to 1000 
const perfectsq = (n1,n2 ,k ,j) => {

//    int = n1 , n2 , k , j ;
    for(k = n1 ; k <= n2 ; k++)
    {
        j = sqrt(k);
        if(k * k == j){
            console.log("Perfect Square");
        }
    }
}
perfectsq(1,1000);