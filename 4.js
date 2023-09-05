//Function Hoisting
// Normal Function
// console.log(sum(10, 20)); // 30
// function sum(no1, no2) {
//   return no1 + no2;
// }
// Function Expression
// console.log(funExpr(20, 20)); //Error! Uncaught ReferenceError: Cannot access 'funExpr' before initialization.
// let funExpr = function (no1, no2) {
//   return no1 + no2;
// };
// Arrow Function
// console.log(arrowFun(10, 20)); //Error! Uncaught ReferenceError: Cannot access 'arrowFun' before initialization
// let arrowFun = (no1, no2) => no1 + no2;

// function callSomeFunction(someFunction, someArgument) {
//   return someFunction(someArgument);
// }
// function add10(num) {
//   return num + 10;
// }
// let result = callSomeFunction(add10, 10);
// console.log("Result is:", result); //20
// function Greeting(num) {
//   return `Hello ${num}`;
// }
// result = callSomeFunction(Greeting, "amit");
// console.log("Result2 is:", result); //Hello Amit

// function magicCube(){
//     return function calCube(x){
//         return x**3;
//     }
// }
// const cube=magicCube();
// console.log("Cube is:", cube(3)) //27

// var color = "blue";
// function changeColor() {
//   let anotherColor = "red";
//   function swapColor() {
//     let tempColor = anotherColor;
//     anotherColor = color;
//     color = tempColor;
// console.log("Color1 is:", anotherColor) //blue
// console.log("Color1 is:", tempColor) //red
// console.log("Color1 is:", color) //red
//   }
// console.log("Color2 is:", anotherColor) // red
// console.log("Color2 is:", tempColor) //tempColor is Not defined
// console.log("Color2 is:", color) //blue
//   swapColor();
// }
// console.log("Color3 is:", anotherColor) //Not defined
// console.log("Color3 is:", tempColor)//Not defined
// console.log("Color3 is:", color) //blue
// changeColor();

// window.color='red';
// let o={
//     color:'blue'
// }
// function sayColor(){
//     alert(this.color);
// }
// sayColor(); //red
// o.sayColor=sayColor; //
// let o1 = {
//   color: "blue",
//   sayColor: function sayColor() {
//     alert(this.color);
//   },
// };
// console.log(o1.sayColor()); //blue

//This in arrow Function
// let me = {
//   name: "Jagriti",
//   thisInArrow: () => {
//     console.log("My name is " + this.name);  //Error
//   },
//   thisInNormalFunction: function () {
//     console.log("My name is " + this.name); //My name is Jagriti
//   },
// };
// me.thisInArrow();
// me.thisInNormalFunction();

// var fullName = "Ami";
// var obj = {
//   fullName: "Amit",
//   prop: {
//     fullName: "Amitabh",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName()); //Amitabh
// var test = obj.prop.getFullName; //Ami
// console.log(test());
// console.log(obj.prop.getFullName.call(obj));// Amit
// console.log(obj.prop.getFullName.apply(obj));// Amit
// let bind=obj.prop.getFullName.bind(obj);
// console.log(bind()); //Amit

//Pass by value
// function swap(){
//     let temp;
//     temp=no1;
//     no1=no2;
//     no2=temp;
//     console.log("in Swap function",no1,no2); //20 10
// }
// let no1=10,no2=20;
//     console.log("Before Swapping",no1,no2); //10 20
//     swap(no1,no2);
//     console.log("After Swapping",no1,no2); //20 10

//Pass by reference
// function append(a) {
//   // a.push(20);
//   // console.log(" inside a",a);//[10, 40, 20]
//   //   a.concat(20);
//   //   console.log(" inside a", a); //[10, 40]
// }
// let a = [10, 40];
// console.log("a", a);
// append(a);
// console.log("After a", a); // [10, 40, 20]


// let names=['amit','jagriti','hari'];
// for(let name of names){
//     console.log(name);
// }

window.color='red';
let o={
    color:'blue'
}
let sayColor=()=>{
    alert(this.color); //red
}
console.log(sayColor()); //red
o.sayColor=sayColor; //
console.log(o.sayColor()); //red