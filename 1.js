// let x;
// console.log("x=",x);
// console.log("Type of:",typeof x); //undefined
// x=12;
// console.log("x",x);
// console.log("Type of:",typeof x); //number
// x= 12.5;
// console.log("x",x);
// console.log("Type of:",typeof x); //number
//  x="one";
// console.log("x",x);
// console.log("Type of:",typeof x); //string
// x=true;
// console.log("x",x);
// console.log("Type of:",typeof x); //boolean
// x=null;
// console.log("x",x);
// console.log("Type of:",typeof x); //object

// let x="5"+2;
// console.log("x=",x); //52
//  x=5+'2';
// console.log("x=",x); //52
// x="5"-2;
// console.log("x=",x); //3
// x=5*"god";
// console.log("x=",x); //NAN
// x="5"+true;
// console.log("x=",x); //5true
// x=5+true;
// console.log("x=",x); //6

// var x = 10;
// console.log("x=", x); //10
// if (true) {
//   var z = 20;
//   console.log("z=", z);//20
//   let y = 30;
//   console.log("y=", y); //30
//   var x = 40;
//   console.log("x=", x);//40
// }
// console.log("x=", x); //40
// console.log("z=", z); //20
// console.log("y=", y); //not defined

//Local Scope
// function Print() {
//   var z = 20;
//   console.log("z=", z); //20
//   let y = 30;
//   console.log("y=", y); //30
// }
// Print();
// console.log("z=", z); //not defined
// console.log("y=", y);//not defined

// function Print() {
//   console.log("p=", p); //undefined
// console.log("q=", q); //cannot access q before initialization
//   var z = 20;
//   console.log("z=", z); //20
//   let y = 30;
//   console.log("y=", y); //30
// }
// Print();
// console.log("z=", z); //not defined
// var p = 10;
// console.log("p=", p); //10
// let q = 20;
// console.log("q=", q); //20

// var no = 5;
// var cno = "5";
// if (no == cno) {
//   console.log("Both are same"); //Both are same
// } else {
//   console.log("Both are NOT same");
// }
// if (no === cno) {
//   console.log("Both are same");
// } else {
//   console.log("Both are NOT same"); //Both are NOT same
// }

// function sum(no1, no2) {
//   let ans = no1 + no2;
//   console.log("sum is:", ans);
// }
// sum(10, 20); //30
// sum(10, 20, 30); //30
// sum(10); //NAN

//Arguments
// function sum(no1, no2) {
//   console.log("Number of arguments", arguments.length);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log("arguments[", i, "]", arguments[i]); //2 3 1
//   }
//   let ans = no1 + no2;
//   console.log("sum is:", ans);
// }
// sum(10, 20); //30
// sum(10, 20, 30); //30
// sum(10); //NAN

//Arrow function
// const HelloWorld = () => console.log("Hello World");
// HelloWorld(); // Hello World

// const greet = (name) => console.log("Hello " + name);
// greet("World"); //Hello World

// let names = ["Hello", "World", "Jagriti here"];
// console.log("Types of names:",typeof names); //Object

//Iterates  over Array
// for(let i=0; i<names.length;i++){
//     console.log(names[i]);
// }
//OR
// names.forEach(val=>console.log(val));
//OR
// let arr = [10, 20, 30, 40, 50, 60];
// let res = arr
//   .map((x) => x + 5)
//   .filter((x) => x > 35)
//   .includes(45);
// console.log(res); // true

// let res = arr.map((x) => x + 5);
// console.log(res); // [15, 25, 35, 45, 55, 65]
// console.log(arr); //  [10, 20, 30, 40, 50, 60]

// let filtered = arr.filter((x) => x > 20);
// console.log(filtered); //[30, 40, 50, 60]

// var flag = arr.includes(30);
// console.log("flag is:", flag); //true

// var index = arr.findIndex((x) => x > 25);
// console.log("Index is:", index); //2

// var slice = arr.slice(2); //
// console.log("slice is:", slice); //[30, 40, 50, 60]

// var slice2 = arr.slice(1, 3);
// console.log("slice2 is:", slice2); // [20,30]

// let filla = arr.fill(0, 2, 4);
// console.log("filla is:", filla); // [10, 20, 0, 0, 50, 60]
// let filla1 = arr.fill(0, 1);
// console.log("filla is:", filla1); // [10, 0, 0, 0, 0, 0]
// let filla2 = arr.fill(0);
// console.log("filla is:", filla2); // [0, 0, 0, 0, 0, 0]

/* The every() method tests whether all elements in the array pass the test implemented by the provided function.It returns a Boolean value.*/

// const isBelowThreshold = (curVal) => curVal < 40;
// const arr1 = [10, 20, 30, 40, 50, 60];
// console.log("isBelowThreshold:", arr1.every(isBelowThreshold)); //false

// const isBelowThreshold = (curVal) => curVal < 40;
// const arr1 = [10, 20, 30, 40, 50, 60];
// console.log("isBelowThreshold:", arr1.some(isBelowThreshold)); //true


/*The flat() method creates a new array with all sub - array elements concatenated  into it recursively up to the specified depth.*/
// let a=[0,1,2,[[[3,4]]]];
// let flata=a.flat();
// console.log("flata:", flata); //[0,1,2,[[3,4]]];
// let flata1=a.flat(2);
// console.log("flata:", flata1);// [0,1,2,[3,4]];

// let mixArr=[1,"hello",true];
// console.log("mixArr:", mixArr); //[1, 'hello', true]

// mixArr.forEach(val=> console.log(typeof val)); //string number boolean

// let a=new Array();
// console.log(a.length); //0
// let ar1=new Array(5);
// console.log(ar1.length);//5 
// console.log(ar1); //undefined *5
// console.log(Array.from("Hello")); // (5) ['H', 'e', 'l', 'l', 'o']

