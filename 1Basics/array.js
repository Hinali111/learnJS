// map
const arr =[1,2,3,4,5];
const double = arr.map((no)=>no*2);
const sqr= arr.map(square);
function square(num){
    return num**2;
}
users=["meera","priya"];
const upper=users.map((name)=>name.toUpperCase());
const lower=users.map(lowerf);
function lowerf(name){
    return name.toLowerCase();
}

const dates=["2025-10-25","2015-4-19"];
const formatedDates= dates.map((date)=>{
    parts=date.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
})


//!  flat
const arrayOfArray =[[1,2,3],[1,2,6],[2,4,6]];
const flatArray= arrayOfArray.flat();

//flatMap -
const flatSquare = arr.flatMap((num)=>[num,num**2]);
const employers=[
    {
        name:"Janvi",
        id:"103",
        age:25,
        gpa:3.5,
        employees:["Kiara","Roshni","Krisha"]
    },
    {
        name:"Raj",
        id:"101",
        age:23,
        gpa:1.5,
        employees:["Savi","Meera"]
    },
    {
        name:"Raj",
        id:"102",
        age:29,
        gpa:2.5,
        employees:["sakhi"]
    }
]
const employerNames= employers.map((employer)=>employer["name"]);
const mapEmployee=employers.map((employer)=>employer.employees);
const flatMapEmployee=employers.flatMap((employer)=>employer.employees);

// console.log(mapEmployee);
// console.log(flatMapEmployee);

users.splice(1,0,"Rani","Krish");
const usersPart = users.slice(1,3);

//! Array Search 
users.push("Krish");

// console.log(users.lastIndexOf("Krish"));
// console.log(users.indexOf("Krish"));
// console.log(users.includes("Ram"));
// console.log(users.at(2));


const findId= employers.find((employer)=>employer["id"]==="101");
const idx= employers.findIndex((employer)=>employer["name"]==="Raj");
const lastIdx= employers.findLastIndex((employer)=>employer["name"]==="Raj");
const lastof25= employers.findLast((employer)=>employer["age"]>=25);
const up25= employers.filter((employer)=>employer["age"]>=25);
// const up25= employers.map((employer)=>employer["age"]>=25);

//! Array Sort
const people = ["Rani","Aniket","Savi","Meera","Darshan","Roshni","Misha"];
people.sort();
// numbers  sorting
const nums=[1,2,3,4,5,6,7,8,9,10,0,13,14];
nums.sort(function(a,b){return a-b;});
nums.sort((a,b)=>a-b);
// sorting in random order
// nums.sort(()=>0.5 - Math.random());
// nums.sort(function(){return 0.5- Math.random();})

//? console.log(nums[0]);
//? console.log(nums[nums.length-1]);
// Math.min  Math.max
const minimum= minInArray(nums);
function minInArray(arr){
    return Math.min.apply(null,arr);
}
const maxInArray = (arr)=>Math.max.apply(null,arr);
const maximum= maxInArray(nums);

// Apply(null,[])
function sum(a,b){
    return a+b;
}
const result=sum.apply(null,[10,20]);

// sorting Object Array
cars=[
    {
        name:"Ford",
        year:2002
    },{
        name:"audi",
        year:2000
    },{
        name:"BMW",
        year:2007
    },{
        name:"kia",
        year:2010
    }
]
cars.sort((a,b)=>a.year-b.year);
// .sort() modifies the original array ✅ Using slice() to Copy Before Sorting:
const ageSorted= employers.slice().sort((a,b)=>a.age-b.age);
const gpaSorted= employers.slice().sort((a,b)=>b.gpa-a.gpa);
// console.log(ageSorted);
// console.log(gpaSorted);


//! forEach()
// const numbers = [2, 4, 6];
// numbers.forEach((element, idx, arr) => {
//     console.log(`Value: ${element}, Index: ${idx}, Array: ${arr}`);
//   });

// const arr =[1,2,3,4,5];
//? arr.forEach((num)=>console.log(num*2));
// arr.forEach(square1);
function square1(num){
    console.log(num**2);
}
// change array with forEach
// arr.forEach((num,idx,arr)=>arr[idx]=num*2);
// arr.forEach(triple);
// arr.forEach(tenTimes);
// arr.forEach(square2);
arr.forEach(cube);
function triple(num,idx,arr){
    arr[idx]= num*3;
}
function tenTimes(num,idx,arr){
    arr[idx]=num*10
}
function square2(num,idx,arr){
    arr[idx]=Math.pow(num,2);
}
function cube(num,idx,arr){
    arr[idx]=Math.pow(num,3);
}
// arr.forEach((num)=>console.log(num));

// 
users.forEach(upper2);
users.forEach(lower2);
users.forEach(capitalized);

function upper2(element,idx,arr){
    arr[idx]=element.toUpperCase();
}
function lower2(element,idx,arr){
    arr[idx]=element.toLowerCase();
}
function capitalized(element,idx,arr){
    arr[idx]= element.charAt(0).toUpperCase()+element.slice(1);
}
console.log(users);

