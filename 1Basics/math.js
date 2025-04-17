//  Math object

console.log(Math.E);
console.log(Math.PI );

let num1 = 5.23;
let num2 = 5.89;
let num3 = 5.5;
console.log(Math.round(num3));
console.log(Math.floor(num2));
console.log(Math.ceil(num1));
console.log(Math.trunc(num2)); // remove decimal part

let no = -6;
let cube = Math.pow(no,3);
let sqrtNo = Math.sqrt(no);
let absolute = Math.abs(no);
console.log(absolute);

let max= Math.max(1,2,3,4,5,6,100);
let min= Math.min(2,3,4,-2,5,6,20);
console.log(min);
console.log(Math.ceil(Math.random()*10));

//! Generate Random number
//  1 to n
let randomNo = Math.ceil(Math.random()*10);
let randomNo2 = Math.floor(Math.random()*10)+1;

function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(random(5,10));
