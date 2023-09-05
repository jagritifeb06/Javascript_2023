// Object Constructor
// let obj = new Object();
// console.log(obj); //{}
// obj.empid = 1234;
// obj.name = "jagrti";
// obj['dept name'] = "L&D";
// console.log(obj); // {empid: 1234, name: 'jagrti', dept name: 'L&D'}

//Object Literals Notation
// let obj = { empid: 1234, name: "jagrti", "dept name": "L&D" };
// console.log(obj);
// obj.salary = 12345;
// console.log(obj); //{empid: 1234, name: 'jagrti', dept name: 'L&D', salary: 12345}

// merge two array
// let a = [1, 2];
// let b = [3, 4];
// let c = [...a, ...b];
// console.log(c); // [1,2,3,4];

// let empid = 1234;
// let name = "ravi";
// let data = { empid, name };
// console.log(data);

// let salary = 30000;
// let newData = { ...data, salary };
// console.log(newData);
// console.log(Object.keys(newData)); //['empid', 'name', 'salary']
// console.log(Object.values(newData)); // [1234, 'ravi', 30000]
// console.log(Object.entries(newData)); // [ ['empid', 1234], ['name', 'ravi'],['salary', 30000]]
// for (var key in newData) {
//   console.log("key" + key + "values:" + newData[key]);
// }

// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // {a: 1,b: 3,c: 4}

let obj1 = { a: 1 };
let obj2 = obj1;
let obj3 = { a: 1 };
console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // true
console.log(obj1 === obj3); // false
console.log(obj3 === obj2); // false
