const customerData=[
    {
        customerId : 101,
        customerName : "Janvi",
        purchase : 20000,
        date : "2-25-2025"
    },{
        customerId : 100,
        customerName : "Meera",
        purchase : 15000,
        date : "1-4-2025"
    },{
        customerId : 103,
        customerName : "Anirudh",
        purchase : 24000,
        date : "3-15-2025"
    }
]

// for(let i=0; i<=customerData.length-1; i++){
//     console.log(customerData[i]);
// }
// for(let i=0; i<=customerData.length-1; i++){
//     console.log(customerData[i].customerName);
// }
// for(let i=0; i<=customerData.length-1; i++){
//     console.log(customerData[i].purchase);
// }
//! continue break
for(let i=1; i<=20; i++){
    if(i===13){
        // break;
        continue;
    }
    // console.log(i);
}

const purchases = displayPurchases("","",customerData);
// console.log(purchases);
const totalPurchase = purchases.reduce((a,b)=>a+b);
// console.log(`Total Purchase: ${totalPurchase}`);

//! for (in)
const obj ={
    name: "Raju",
    id:102,
    age: 22,
    city :"Surat",
    post:"doctor"
}
for(let key in obj){
    // console.log(obj[key]);
}

const arr=[12,35,4,56,9,29,19,48];
for(let x in arr){
    // console.log(arr[x]);
}

for(let idx in customerData){
    // console.log(customerData[idx]);
}

//! for of
for(let data of customerData){
    // csonsole.log(data);
}
str = "JavaScript";
for(let char of str){
    // console.log(char);
}

//! forEach()
customerData.forEach((data)=>data.purchase=20000);
// console.log(customerData);
const purchases2 = displayPurchases("","",customerData);
// console.log(purchases2);
// const totalPurchase2 = purchases2.reduce((a,b)=>a+b);
// console.log(`Total Purchase: ${totalPurchase2}`);

function displayPurchases(data,idx,arr){
    return arr.map((data)=>data.purchase);
}

//! while()
let i=1;
while(i<=10){
    // console.log(i);
    i++;
}

//! do while()
i=1;
do{
    console.log(i);
    i++;   
}while(i<=0);