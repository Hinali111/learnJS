// Set object
const set1 = new Set([1,2,3]);
// console.log(set1);

// array set
const arr=[1,1,2,2,2,3,3,3,4,5,6,7,8];
const arrSet= new Set(arr);
// console.log(arr);

// add()
arrSet.add(100);
// has()
console.log(arrSet.has(50));
// values()
console.log(arrSet.values());
// keys()
console.log(arrSet.keys());


// console.log(arrSet);
// console.log(typeof arrSet);
// console.log(arrSet instanceof Set);

for(let item of arrSet){
    // console.log(item);
}


const data=[
    {
        name:"priya",
        age:12
    },{
        name:"Rita",
        age:17
    }
]
const dataSet= new Set(data);
const dataSet2= [...data] //second way
console.log(dataSet2);  //dont return keys it returns whole element

const names = [...data].map((data)=>data.name);
console.log(names);

