const person0={}
person0.name="Preesha";
person0.age=19;
person0.city="surat";
person0.country="India";

// console.log(person0);

//! function to make object
function Person(firstName,lastName,age,city){
    this.firstName= firstName;
    this.lastName= lastName;
    this.age= age;
    this.city= city;
    // this.nationality="Indian";
}

// person.department = "Management";   //! wrong 
Person.prototype.nationality = "English";
Person.prototype.department="management";  //right
Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
const person1 =new Person("Jiya","Rajput",23,"Surat");
const person2 =new Person("Ram","kothiya",28,"Rajkot");
const person3 =new Person("Kiara","Patel",24,"Bombay");
// console.log(person1.fullName());
// console.log(person2);
// console.log(person3);

const people=[]
people.push(person1);
people.push(person2,person3);
// console.log(people);

//! assign()
//! combine objects 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"c", 6:"d"}
const obj5 = {7:"c", 8:"d"}
const obj3 = {...obj1, ...obj2, ...obj4, ...obj5}
// const obj3 = Object.assign({},obj1,obj2,obj4,obj5);
// console.log(obj3);

const target = {
    name:"Meera",
    age:18,
    salary:200000
}
const source = {
    name:"Kiara"
}
Object.assign(target,source);
// console.log(target);

//! entries()
let text = Object.entries(target);
// console.log(text);
const fruits = {
    Bananas:300, Oranges:200, Apples:500
}
for(let [fruit,price] of Object.entries(fruits)){
    // console.log(`${fruit}: ${price}`);
}
//? object to Map
const map1 = new Map(Object.entries(fruits));
// console.log(map1);

//! values() keys() 
const fruitsKeys = Object.keys(fruits);
// console.log(fruitsKeys);
const fruitsValues = Object.values(fruits);
// console.log(fruitsValues);

//! fromEntries()
// [ [ 'name', 'Kiara' ], [ 'age', 18 ], [ 'salary', 200000 ] ]
const textObj = Object.fromEntries(text);
// console.log(text);
// console.log(textObj);

//! groupBy()
// https://www.youtube.com/watch?v=CHkSHfmtbEA
const users =[
    {name:"Janvi",joined:2023},
    {name:"Janvi",joined:2023},
    {name:"Janvi",joined:2020},
    {name:"Janvi",joined:2020},
    {name:"Janvi",joined:2025},
    {name:"Janvi",joined:2023},
    {name:"Janvi",joined:2020}
];
const groupedByJoinedYear = Object.groupBy(users,(user)=>user.joined);
// console.log(groupedByJoinedYear);
const students2 =[
    {name:"Krish",score:99},
    {name:"Krish",score:40},
    {name:"Krish",score:33},
    {name:"Krish",score:80},
    {name:"Krish",score:88},
    {name:"Krish",score:34},
    {name:"Krish",score:49}
]
const groupedByScore = Object.groupBy(students2,student=>student.score>50 ? "passed" : "failed")
// console.log(groupedByScore);

const fruits2 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];
const groupedByQuantity2= Object.groupBy(fruits2,forQuantity);
// const groupedByQuantity = Object.groupBy(fruits2,(fruit)=>fruit.quantity> 400 ? "ok" : "low");
function forQuantity(fruit){
    return fruit.quantity > 400 ? "ok": "low";
}
// console.log(groupedByQuantity2);

//! freeze
// Bananas:300, Oranges:200, Apples:500
fruits.Strawberries = 600;
Object.freeze(fruits); 
fruits.kiwis = 700;
// console.log(fruits);

const mySym = Symbol("key1");
const person = {
    firstName:"Priya",
    lastName : "Jadhav",
    age: 25,
    [mySym] :"myKey1"
}

person.email= "priya@gmail.com";
person.greeting = function(){
    return `Have a good day ${this.firstName}`;
}
// console.log(person);
// console.log(person.greeting);
// console.log(person.greeting());

//! hasOwnProperty()    
// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("firstName"));
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.keys(person));




//! Destructure Objects

const course ={
    courseName:"Js",
    coursePrice: 1999,
    courseInstructor: "Meera"
}
const {courseInstructor: instructor} =course
const {coursePrice: price} = course
// console.log(price);


//! get set

Object.defineProperty(person,"fullName",{
    set : function(name){
        const names = name.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    },
    get : function(){
        return `${this.firstName} ${this.lastName}`
    }
});
person.fullName = "Riya Khan"
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);

const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});
obj.reset;
obj.increment;
obj.decrement;
obj.add=4;
obj.subtract = 2;
// console.log(obj);

// get set
const person10={
    fName: "Priya",
    lName: "jadhav",
    age:16,
    language :"",
    set lang(n){
        this.language = n;
    },
    get lang(){
        return this.language.toUpperCase();
    }
}
person10.lang = "english"
// console.log(person10.lang);

Object.defineProperty(person10,"fullName",{
    get: function(){
        return `${this.fName} ${this.lName}`;
    },
    set: function(name){
        const names = name.split(" ");
        this.fName = names[0]; 
        this.lName = names[1]; 
    }
})
person10.fullName = "Raj Shah";
console.log(person10.fullName);


//! extra methods
Object.preventExtensions(person10);             // can not extend  --can not add more  but can delete
// console.log(Object.isExtensible(person10));
Object.seal(person10);                          // can modify values only
// console.log(Object.isSealed(person10));  
Object.freeze(person10);                          // can not do anything no change no add no delete
// console.log(Object.isFrozen(person10));         
