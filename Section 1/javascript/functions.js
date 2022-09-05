// Defining the Function
// function addNums (a,b){
//      n = "This works in Function only"    
//     console.log(a+b);
// }

// Calling the function
// addNums(2,3);
// addNums(102,305);
// addNums(2033,500);
// addNums(212,3434);
// console.log(n);

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

function fact(n){
let f = 1;
for(i=2;i<=n;i++){
    f = f * i ;
}
console.log(f);
return f;
}
const res = fact(10);
console.log(res);

// returning multiple values 
const addmul =function (a,b){
    s = a + b ;
    p = a * b ;
    return [s,p]; 
}
const [add, mul] = addmul(5,12);
console.log(add ,mul);

// console.log(2**5);
// console.log(Math.pow(2,5));

const checkPerfect = (m) => {
    // console.log(m**0.5);
    if(m**0.5 === parseInt(m**0.5)){
        console.log('Perfect Square');
        // return m;
    }else{
        console.log('Not a Perfect Square');
    }
}
checkPerfect(49);
