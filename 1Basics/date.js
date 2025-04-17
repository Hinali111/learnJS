// dates
let nowDate= new Date();
// console.log(nowDate);
// console.log(typeof nowDate);
// console.log(nowDate.toString());
// console.log(nowDate.toDateString());
// console.log(nowDate.toISOString());
// console.log(nowDate.toJSON());
// console.log(nowDate.toLocaleDateString());
// console.log(nowDate.toLocaleString());

// create date  //!month starts from 0
// let createdDate=new Date(year,month,date,hour,minute);
let createdDate1=new Date(2025,0,25,23,11);
// way2
let createdDate2=new Date("2025-01-25");
let createdDate3=new Date("10-25-2005")
console.log(createdDate2.toLocaleString());
console.log(createdDate2.toDateString());

// timeStamp
let myTimeStamp= Date.now() 
// console.log(myTimeStamp);
// console.log(createdDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date(2025,10,27,23,10);
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());

let year= newDate.getFullYear();
let month= newDate.getMonth()+1;
let date= newDate.getDate();
let hour= newDate.getHours();
let minute=newDate.getMinutes();
let second=newDate.getSeconds();
console.log(`${date}/${month}/${year} and Time ${hour}:${minute}:${second}`);

newDate.setFullYear(2025);
newDate.setMonth(9);
newDate.setDate(25);
newDate.setHours(6);
newDate.setMinutes(0);

let year2= newDate.getFullYear();
let month2= newDate.getMonth()+1;
let date2= newDate.getDate();
let hour2= newDate.getHours();
let minute2=newDate.getMinutes();
let second2=newDate.getSeconds();
console.log(`${date2}/${month2}/${year2} and Time ${hour2}:${minute2}:${second2}`);

let date2025 = new Date("12-31-2025");
let date2026 = new Date("01-01-2026");

if(date2026>date2025){
    console.log("Happy New Year");
    
}

// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
let diff = newDate.getTimezoneOffset();
console.log(diff);
