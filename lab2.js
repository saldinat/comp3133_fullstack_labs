
//ex1
    let gretter =  function f(myArray, counter){
    const greetText = "Hello";
    for(let i of myArray){
        console.log(greetText + " " + i);
    }
}
gretter(['Randy', 'RIc', 'Hulk'], 3);

//ex2
let cap = function(word){
    [word[0], ...rest] = word;
    console.log(word[0].toUpperCase() + rest.join(''));
}
cap("node");

//ex3
const colors = ['red', 'green', 'blue'];
let map = function(arr){
    return arr.map(x => cap(x));
}
map(colors);

//ex4
let values = [1, 60, 34, 30, 20, 5]
let filterLessThan20 = function(arr){
    console.log(arr.filter(n => n < 20));
}
filterLessThan20(values);

//ex5
let calculateSum = function(arr){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(arr.reduce(reducer));
}
let myArr = [1, 2, 3, 4];
calculateSum(myArr);

let calculateProduct = function(arr){
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    console.log(arr.reduce(reducer));
}
calculateProduct(myArr);

//ex6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details() {
        return "Model: " + this.model + " " + this.year;
    }
}
class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return "Model " + this.model + " has a balance of  " + this.balance;
    }
}
const car = new Car('Pontiac', 1979);
const sedan = new Sedan('volvo', 2018, 3000);
console.log(car.details());
console.log(sedan.info());
