let num = [1,2,3,5,6];
let f = num.filter(n => n > 2);
console.log(f);

let num2 = [2,4,5,6,8]
let m = num2.map(n => n * 2)
console.log(m);


let arr = [1, 2, 3, 4];

let sum = 0;

arr.forEach((num) => {
    sum += num;
});

console.log(sum);

let arr2 = [2,4,5,6,7,8]
let su = arr2.reduce((total,nu) => total+nu,0)
console.log(su)

let arr3 = [2,1,3,7,5,9]
arr3.sort()
console.log(arr3)

let obj = {
    name : "Ujjwal",
    age : 20,
    city : "Lucknow"
}
console.log(obj.age)
obj.age = 21;
console.log(obj.age)
console.log(obj.name)

let car = {
    name : "BMW",
    greet:function(){
    console.log("Hello this car is", this.name);
    }
}
car.greet();