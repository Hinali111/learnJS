// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

let success = true;

let promise=new Promise((resolve,reject)=>{
    if(success){
        resolve("it Worked")
    }else{
        reject("It failed")
    }
});
promise.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});

// async function pro() {
//     try{
//         let result =await promise;
//         console.log(result);
//     }catch(error){
//         console.log(`ERROR: ${error}`);
//     }
// }
// pro();

// 4 tasks 
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
            const task = true
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

// task1().then((value)=>{
//     console.log(value);
//     return task2();
// }).then((value)=>{
//     console.log(value);
//     return task3();
// }).then((value)=>{
//     console.log(value);
//     return task4();
// }).then((value)=>{
//     console.log(value);
//     console.log("All the tasks are Completed.");
// }).catch((error)=>{
//     console.erroe(error);
// })