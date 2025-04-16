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
console.log(flatSquare);
const employers=[
    {
        name:"Janvi",
        employees:["Kiara","Roshni","Krisha"]
    },
    {
        name:"Raj",
        employees:["Savi","Meera"]
    },
    {
        name:"Disha",
        employees:["sakhi"]
    }
]
const employerNames= employers.map((employer)=>employer["name"]);
const mapEmployee=employers.map((employer)=>employer.employees);
const flatMapEmployee=employers.flatMap((employer)=>employer.employees);

// console.log(mapEmployee);
// console.log(flatMapEmployee);