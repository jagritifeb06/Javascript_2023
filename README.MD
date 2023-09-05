# Javascript is dynamically typed language.

# Static Typed Language : Whenver we declare any variable, We have to declare it with its datatype. Dtatype is fixed at the time of code compilation.

# Dynamically typed language: At the time of declaration, datatype is not assigned to a variable.

# Null is considered as a object.

# Javascript is dynamic in nature. Datatype is determined at run time.

# Mozilla--Spider monkey
# Chrome- V8

# Whenever browser encounters Js code, JS engine executes the code.

# Datatype: number,string,boolean,null,undefined.

# Except primitive datatype, everything is object in Javascript.
# Scope: global,block,local

# function has local scope.
# Never use var keyword to declare a variable.

# Variable declared inside a function has local scope. we can't acess that variable outside the function with var and let keyword

# We try to access the variable before its declaration, with var keyword , we will get "undefined".

# We try to access the variable before its declaration, with let keyword , we will get error.(Temporary Dead Zone.)

# In javascript, we can pass any number of arguments to the function irrespective of function arguments the are accepting.

# Arguments is special array that is attached to function.
# Arguments array holds all the arguments that is passed during function call.

# filter is used to filter an array based on some criteria.

# #FindIndex is used to return the index of first element that satisfy the given criteria

# Includes returns a boolean value.

# Slice is function overloading

# Every method is used to check whether all the elements of the array satisfy the certain criteria.

# Bracket Notation allow you to add special characters to the key property of object while dot operator doesn't allows.

# Javascript uses two types of memory alloaction :stack,heap
# All primitive variables are stored in stack.

# Address of two objects are get compared in case of comparing two objects.


# Javascript doesn't support Function overloading. If we declare multiple function with same name, last declaration is considered real/final function declaration.

# Regular parameters should not come after default parameters.(Default parameters should be last.)

# The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

# Like variables, function are also hoisted.Function Expression and arrow function are not hoisted. 
# In arrow function, this is always not bind. Can't use this keyword in arrow   function.

# in normal function this refers to the current execution context.

# Except primitive datatype, everything is passed by reference.

# Destructuring of objects , extract the key from the object. Object won't change. Have to use same key name while destructuring. 

# Rest parameter behaves like polymorphism.

... in function treated as rest Parameter
... in object treated as Spread operator.