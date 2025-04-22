class user{
    constructor(userName){
        this.userName =userName;
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`);
        
    }
}

class teacher extends user{
    constructor(userName,email,password){
        super(userName);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
    }
}

const teacher1 = new teacher("Meera","meera@amazon.com");
// console.log(teacher1.addCourse());
// console.log(teacher1.logMe());

const user1 = new user("Janvi");
// console.log(user1.logMe());


//! getter & setter in class

class car{
    constructor(carName){
        this.carName = carName;
    }
    set car(name){
        this.carName = name;
    }
    get car(){
        return this.carName;
    }
}
const car1 = new car("BMW");
car1.car = "Fortuner";
console.log(car1.car);

const car2 = new car("Audi");
car2.car = "KIA"
console.log(car2.car);
