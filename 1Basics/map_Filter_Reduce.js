//! filter
const nums =[16,26,33,44,54,46,60,20,16,18];
const up25 = nums.filter((num)=>(num>25));
// console.log(up25);


const books = [
    { title: 'Book One', genre: 'History', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'History', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'History', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const fictionBooks = books.filter((book)=> book.genre ==="Fiction");
// console.log(fictionBooks);
const history2000 = books.filter((book)=> {
    return book.genre === "History" && book.publish >2000
})
// console.log(history2000);

//! map
const numbers= [1,2,3,4,5,6,7,8,9,10];
const no1 = numbers.map((no)=>no+10);
// console.log(no1);
const no2 = numbers.map((no)=> (no*10))
                    .map((no)=> (no+1))
                    .filter((no)=> (no>50));
// console.log(no2);

//! reduce
const sum = numbers.reduce((sum,no)=> (sum+no),0);
const sumAll = numbers.reduce(function (acc,currentVal){
    return acc + currentVal;
},0)
// console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalOfCart = shoppingCart.reduce((acc,item)=>acc+item.price ,0)
// console.log(`Total Cart is ${totalOfCart}`);
