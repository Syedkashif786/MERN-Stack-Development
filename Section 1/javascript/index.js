console.log('Hello JavaScript!');

age = 56;
console.log(age);
console.log(typeof(age));

if(age >= 18){
    console.log('you are eligible for DL');

    a="This should be Global";
    var x = "This only works inside function";
    // let y="This should be local";
    const z = "This is be constant";
    z = "new value";
}else{
    console.log('you are not eligible for DL');
}
console.log(a);
console.log(x);
// console.log(y);
console.log(z);