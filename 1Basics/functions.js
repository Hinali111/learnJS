function add(a,b){
    return a+b;
}
// console.log(add(2,3));

//!anonymous function  (a function without a name).
const product = function(a,b){
    return a*b;
}
let res = product(10,2);
// console.log(res);

// self invoking function
(function () {
    let x = "Hello!!";  // I will invoke myself
    // console.log(x);
  })();

let num = add(23,27)+1;
// console.log(num);


function myFunction() {
    return arguments.length;
}
// console.log(myFunction(1,2,3,4,5));     //returns 5

function myFunction(a, b) {
    return a * b;
}
let text = myFunction.toString();
let text2 = myFunction(2,3).toString();
// console.log(text);

//! arrow function
const addition =(a,b) => a+b;
const multiply =(a,b) => {return a*b};
// console.log(addition(5,3));
// console.log(multiply(5,3));

//! Rest parameters
// console.log(sumAll(1,2,3,4,5,6,7,8,9,10));
// console.log(print(1,2,3,4,5));

function sumAll(...args){
    sum=0;
    for(arg of args){
        sum+=arg;
    }
    return sum;
}
function print(a,b,...args){
    return args;
}

// find max
// console.log(findMax(1,200,30,39,50,600));
function findMax(){
    max = -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
// console.log(findMin(-23,45,300,500,-900));
function findMin(){
    let min = Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i]<min){
            min = arguments[i];
        }
    }
    return min;
}
// sumAll
// console.log(addAll(1,2,3,4,5,6,7,8,9,10));
function addAll(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum+= arguments[i];
    }
    return sum;
}

function logInMessage(name="User"){
    if(name===undefined){
        console.log("Please Enter User Name");
        return;
    }
    return `${name} just logged in`;
}
// console.log(logInMessage());
// console.log(logInMessage("Meera"));

//! pass object as argument
const user1 ={
    name:"Jeet",
    age:18,
    city : "Rajkot"
}
function handleObject(anyObject){
    return `username is ${anyObject.name} who is ${anyObject.age} years old.`;
}
// console.log(handleObject(user1));
// console.log(handleObject({
//     name:"Riya",
//     age: 23,
//     city :"Surat"
// }));

//! pass array as argument
myArr = [1,2,3,4,5,6];
function secondInArr(arr){
    return arr[1];
}
// console.log(secondInArr(myArr));


//! JavaScript Closures
// nested functions
function outer(){
    const outerVar = 200;
    function inner(){
        console.log(outerVar);
    }
    inner();
}
outer();