class user{
    static age = 20;
    constructor(name){
        this.userName = name;
    }
    logMe(){
        console.log(`USERNAME : ${this.userName}`);
    }
    static createId(){
        return 123;
    }
}


const meera =new user("Meera");
console.log(user.createId());           // call on class
// console.log(meera.createId());       // cannot call on objects 
console.log(user.age);
// console.log(meera.age);

class teacher extends user{
    constructor(userName,email){
        super(userName);
        this.email =email;
    }
}

class mathUtil{
    static PI = 3.14;
    static getDiameter(radius){
        return radius*2;
    }
    static circumfrance(radius){
        return 2* this.PI * radius;
    }
    static area(radius){
        return this.PI* radius*radius;
    }
}
// console.log(mathUtil.getDiameter(10));
// console.log(mathUtil.circumfrance(10));
// console.log(mathUtil.area(10));
// console.log(mathUtil.PI);

class users{
    static userCount = 0;
    constructor(userName){
        this.userName = userName;
        users.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${this.userCount} users`);
    }
    sayHello(){
        console.log(`Hello, my userName is ${this.userName}`);
    }
}
const user1 =new users("Priya");
const user2 =new users("Zeel");
const user3 =new users("Heer");
const user4 =new users("Roop");
const user5 =new users("Kiara");

// console.log(user1.userName);
// console.log(user2.userName);
// console.log(user3.userName);
// console.log(user4.userName);
console.log(`Total Users: ${users.userCount}`);
// console.log(`now Total Users: ${users.userCount}`);

user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();
user5.sayHello();
users.getUserCount();