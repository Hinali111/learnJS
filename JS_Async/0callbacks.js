// callback  = a function that is passed as an argument to another function.

//  Used to handle asynchronous Operations
// 1. Reading files
// 2. Network requests
// 3. Interacting with databases

//      Hey you're done, call this next

//! callback   // ex-1
// hello(wait);

function hello(callback){
    console.log("hello");
    callback();
}
function leave(){
    console.log("leave");
}
function wait(){
    console.log("wait");
}
function goodBye(){
    console.log("goodBye");
}


//! callback   // ex-2
// sum(display,2,3);
function sum(callback,x,y){
    let result =x+y;
    callback(result);
}
function display(res){
    console.log(res);
}

// multiply(displayMul,3,4);
function multiply(callback,a,b){
    let result= a*b;
    callback(result);
}
function displayMul(res){
    console.log(res);
}


//! callback Hell
function task1(callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
    },2000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2");
        callback();        
    },1000);
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task 3");
        callback();
    },3000);
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4");
        callback();        
    },2500);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All tasks are completed");
            })
        })
    })
});