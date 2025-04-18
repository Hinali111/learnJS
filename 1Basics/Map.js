const dataMap = new Map([
    ["apple",200],
    ["pinapple",300],
    ["kiwi",100],
    ["grapes",500]
]);

dataMap.set("strawberry",150);
console.log(dataMap.size);
dataMap.delete("apple");
console.log(dataMap);
console.log(dataMap.has("apple"));
console.log(dataMap.keys("apple"));
console.log(dataMap.values("apple"));

dataMap.clear();
console.log(dataMap);


// toExponential()	Returns a string, with a number rounded and written using exponential notation.
// toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
// toPrecision()	Returns a string, with a number written with a specified length

num = 50
console.log(num.toFixed(2));
console.log(num.toPrecision(5));
console.log(num.toExponential(5));
