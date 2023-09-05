// let s='god is almighty';
// console.log('type: ' + typeof s); // string

// let str=new String('God is almighty');
// console.log('type of str: ' + typeof str); //object

// let sarr=s.split(' ');
// console.log('type: ',sarr); //['god', 'is', 'almighty']

// let mergeArr=sarr.join(' ');
// console.log('Merge: ',mergeArr); //god is almighty

// let sum=function(num1,num2){
//     return num1+num2;
// };
// let anotherSum=sum;
// console.log(sum(10,20)); //30
// console.log(anotherSum(10,20)); //30

// sum=null;
// console.log(sum(10,20)); //sum is not a funtion(as it is garbage collected);
// console.log(anotherSum(10,20));

// console.log("first Statement");
// setTimeout(function () {
//   console.log("second Statement");
// }, 0);
// for (var i = 0; i < 5; i++) {
//   console.log("Fourth statement");
// }
// console.log("Third Statement"); //first fourth third second

// class Car {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getDetails(){
//     return `name is ${this.name} and age is ${this.age}`;
//   }
// }
// const car = new Car("Hello", 10);
// console.log(car.getDetails());

//Function Overloading (function with same name )
// function addSomeNumber(no1) {
//   return no1 + 100;
// }
// function addSomeNumber(no1, no2) {
//   return no1 + no2 + 200;
// }
// let result=addSomeNumber(100);
// console.log('result is:',result); //NAN
// result = addSomeNumber(100,200);
// console.log('result is:',result); //500

//Default Arguments
// function sum(no1 = 10, no2 = 20) {
//   return no1 + no2;
// }
// console.log(sum()); //30
// console.log(sum(100)); //120
// console.log(sum(100, 200)); //300
