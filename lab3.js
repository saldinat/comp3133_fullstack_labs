//ex 1
const compareToTen = function(num){
    let promise = new Promise((resolve, reject) => {
        if(num>10) {
            resolve("success");
        } else {
            reject(new Error("no success"));
        }
    });
    return promise;
}
compareToTen(90).then(result => console.log(result))
.catch(error => console.log(error));

//ex2
function toUpper(item) {
    return item.toUpperCase();
}
const makeUpperCase = function(arrayOfNames){
    let promise1 = new Promise((resolve, reject)=> {
        if(arrayOfNames.every(function(i){ return typeof i === "string" })){
            var newArr = arrayOfNames.map(toUpper);
            resolve(newArr);
        } else {
            reject(new Error("not all strings"));
        }
        
    });
    return promise1;
}

const sort = function(arrayOfNames){
    let promise2 = new Promise((resolve, reject)=> {
        if(arrayOfNames.every(function(i){ return typeof i === "string" })){
            resolve(arrayOfNames.sort());
        } else {
            reject(new Error("not all strings"));
        }
        
    });
    return promise2;
}
const arrayOfN = ['jaxx', 'tiny', 'clay'];
const mixedArr = ['anarchy', 99, true];

makeUpperCase(arrayOfN)
    .then(sort)
    .then((result) => console.log(result))
    .catch(error => console.log(error));

/*makeUpperCase(mixedArr)
    .then(sort)
    .then((result) => console.log(result))
    .catch(error => console.log(error));*/

//ex3
var promise1 = 101;
var promise2 = "follow the white";
var promise3 = new Promise(function(resolve, reject){
    resolve("rabbit..neo");
});
Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});

//ex4
const delayedMultiply = (num) => {
    setTimeout(()=>{
        console.log("done");
        return num*num;
    }, 500);
};

const delayedPromise = function(num){
    let promise = new Promise((resolve, reject) => {
        resolve(setTimeout(num*num, 100));
    });
    return promise;
}
delayedPromise(5)
    .then(result => console.log(result));
