sum(displayPage,4,5)

function sum(callback,a,b){
    let result= a+b;
    callback(result)
}

function displayPage(result){
    document.getElementById("myH1").textContent =result;
}

//! Asynchronous
setTimeout(displayP,2000);
function displayP(){
    document.getElementById("para").textContent = `Hello users`;
}
setInterval(displayTime,1000);
function displayTime(){
    const date = new Date();
    const time = `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`
    document.getElementById("time").textContent =`time : ${time}`;
}

//! Promises
// fetch("https://jsonplaceholder.typicode.com/posts").then(response=> response.json())
// .then((data)=>{
//     data.forEach((item) => {
//         console.log(item.id);
//     });
// }).catch((error)=>{console.log("error: ",error);
// })


// fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
// .then(data => console.log(data.filter(item =>item.userId>5)))
// .catch(error => console.log(error))


//! async await
async function printData() {
    try{
        let dataFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await dataFromServer.json();
        data.forEach(item => {
            console.log(`${item.id} : ${item.title}`);
        });
    }catch(error){
        console.log(`error: ${error}`);
    }
}
printData();


// async function getData(){
// let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(await resultFromServer.json());
// }
// getData();
console.log("99");
 
