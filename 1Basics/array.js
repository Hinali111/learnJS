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

console.log(formatedDates);