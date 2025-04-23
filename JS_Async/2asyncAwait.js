// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task = true;
            if(task){
                resolve("Task 1 Completed")
            }else{
                reject("Task 1 is NOT Completed")
            }
        },2000)
    });
}
function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task = true;
            if(task){
                resolve("Task 2 Completed")
            }else{
                reject("Task 2 is NOT Completed");
            }
        },2000)
    });
}
function task3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task = false;
            if(task){
                resolve("Taks 3 Completed.")
            }else{
                reject("Task 3 is NOT Completed.")
            }
        },2000)
    })
}
function task4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task = true;
            if(task){
                resolve("Task 4 completed.")
            }else{
                reject("Task 4 is NOT Completed.")
            }
        },2000)
    })
}

async function tasks() {
    try{
        const result1 = await task1();
        console.log(result1);
        
        const result2 = await task2(); 
        console.log(result2);
        
        const result3 = await task3();
        console.log(result3);
        
        const result4 = await task4();
        console.log(result4);
        
        console.log("All the tasks are completed.");
    }catch(error){
        console.error(`ERROR: ${error}`);
    }
    
}
tasks();