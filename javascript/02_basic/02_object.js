// singleton : A singleton object is a design pattern in which there is only one instance of a class or object created throughout the lifetime of an application

// Object.create  //this method creates singleton type object

const tinderUser = {
    name: "anil",
    age: "30",
    isLoggedIn : false
}

// console.log(Object.keys(tinderUser)); //return all keys in array
// // [ 'name', 'age', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // return all the values in array
// // [ 'anil', '30', false ]

// console.log(Object.entries(tinderUser)); // return new array with combination of multple key valur pair array
// // output: [ [ 'name', 'anil' ], [ 'age', '30' ], [ 'isLoggedIn', false ] ]


// merge multiple object 

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = {5:"a", 6:"b"};

// 1. using assing method 
// first argument is a target and others are source element 

// const resultObj = Object.assign(obj1,obj2,obj3); // obj1 is a target object
// console.log(resultObj);
// // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(resultObj === obj1); //true

// const result = Object.assign({},obj1,obj2,obj3); // in this case result is a whole new object
// console.log(result);
// // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(result === obj1); //false


// 2. using spread [...] operator 

// console.log({...obj1, ...obj2, ...obj3});
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }