//! class

class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const car1 = new car("Audi",2000);
// console.log(`age of ${car1.name} is ${car1.age()}`);

class employee{
    constructor(first,last,year){
        this.firstName= first;
        this.lastName = last;
        this.joinYear = year;
    }
    experience(){
        const date = new Date();
        return date.getFullYear() - this.joinYear;
    }
}
const emp1 = new employee("Riya","Jadhav",2020);
const emp2 = new employee("Jay","Rathod",2018);
const emp3 = new employee("Krisha","Pandya",2017);
// console.log(emp3.experience());




class user{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    greet(){
        return `Welcome in community ${this.userName}`;
    }
    encryptPass(){
        return `${this.password}abc`;
    }
}

const user1 = new user("Mina","mina@google.com","hello10Js");
console.log(user1);
console.log(user1.encryptPass());
console.log(user1.greet());


//! with function
function user0(name,email,password){
    this.userName = name;
    this.email =email;
    this.password = password;
}
user0.prototype.encryptPass= function(){
    return `${this.password}abc`;
}
user0.prototype.greet= function(){
    return `Welcome in community ${this.userName}`;
}

const user11 =new user0("Mina","mina@google.com","hello10Js");
console.log(user1);
console.log(user1.encryptPass());
console.log(user1.greet());

