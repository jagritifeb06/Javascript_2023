//Closures
// function myMakeFunc(){
//     let name="Jagriti";
//     function innerFunc(){
//         console.log(name)
//     }
//     return innerFunc;
// }
// var myFunc=myMakeFunc();
// myFunc();

// let obj={
//     name:"Jagriti",
//     id:1
// }
// let anotherObj=obj;
// console.log(anotherObj);
// console.log(anotherObj===obj);
// console.log(obj===anotherObj);
// console.log(obj==anotherObj);

// let m=new Map();
// console.log(m.size);//0
// m.set("empid",123);
// console.log(m.size); // 1
// if(m.has("empid")){console.log(m.get("empid"))}; //123
// m.set("empname","Jagriti").set("dept","javascript")
// console.log(m.size); //3
// console.log((m.has("empname")))//true
// if(m.has("name")){console.log(m.get("name"))}; //123

// m.delete('empname');
// console.log(m.size)//2

// let prop1=prompt("Enter Prop1:");
// let val1=prompt("Enter Value for prop1:");
// let prop2=prompt("Enter Prop2:");
// let val2=prompt("Enter Value for prop2:");
// let person={
//     [prop1]:`${val1}`,
//     [prop2]:`${val2}`
// };
// document.write(person)
// document.write(JSON.stringify(person));

//Null Coalescing
// var val=null??`right hand side value as left hand side is null`
// console.log(val);
// var val=`left hand side value as left hand side is not null`??`right hand side value`
// console.log(val);
// val = 0 ?? 42;
// console.log(val); //0
// val = undefined ?? 42;
// console.log(val); //42
// val = null ?? 42;
// console.log(val); //42
// val = "" ?? 42;
// console.log(val); //empty string
// val=52??42;
// console.log(val); //42

//Object Destructuring
// let employee={empid:1,name:'amit',dept:"javascript"};
// let {name,dept} = employee;
// console.log('Employee Name:',name); //amit
// console.log('Department Name:',dept); //javascript

function sum(...args) {
  let ans = 0;
  console.log("No of Arguments:",args.length);
  for (let i = 0; i < args.length; i++) {
    ans = ans + args[i];
  }
  console.log("Sum is:", ans);
}
sum(10); //10
sum(10, 20); //30
sum(10, 20, 30); //60
