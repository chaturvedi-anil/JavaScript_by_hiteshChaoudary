// in javascript array can hold all datatypes value and also array is resizable in javascript
let arr = [1,23,'anil', [1,2,3], {fname: "anil" , lname:"chaturvedi"}, true, null, undefined];

// console.log(typeof arr);

// ------ Array Methods--------

// let newArr = new Array(0,1);
// console.log(newArr);
// newArr.push(2); //push method add value in the next index
// newArr.push(3); 
// console.log(newArr);

// newArr.pop(); //pop method remove value of last index of array
// console.log(newArr); 


// ------slice method-------

//slice method allows you to create a new array containing a shallow copy of a portion of an existing array. It does not modify the original array but returns a new one with the selected elements. it can also take negative value
// array.slice(start, end); both option are optional but if we use both value it with not include end value (end will excluded)

// example
// let nArr = [0,1,2,3,4,5,6];

// console.log("A ",nArr); //original array output A [0,1,2,3,4,5,6]
// console.log(" ");
// console.log(nArr.slice()); // without option :  A [0,1,2,3,4,5,6]
// console.log(nArr.slice(2));  // starting from 2nd index, output : [ 2, 3, 4, 5, 6 ] 
// console.log(nArr.slice(1,5)); // starting from 1st to 4th index, output : [ 1, 2, 3, 4 ]
// console.log(nArr.slice(-3)); // it will divide last 3 index from last : [ 4, 5, 6 ]
// console.log(" ");
// console.log("B ", nArr); // after all the operation original arrat will remain same


// ----------splice method ----------

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// this method affect original array values 

// let nArr = [0,1,2,3,4,5,6,7];

// console.log("original ", nArr); // before operation : [0,1,2,3,4,5,6,7]

// array.splice(start);
// console.log(nArr.splice(2)); //it will make new array with 2nd index : [ 2, 3, 4, 5, 6, 7 ]
// console.log("original ", nArr); // original array left values : [ 0, 1 ]

// console.log(nArr.splice(2,2)); // [ 2, 3 ]
// console.log("original ", nArr); // original  [ 0, 1, 4, 5, 6, 7 ]

// nArr = [0,1,2,3,4,5,6,7];
// console.log(nArr.splice(2,2,6)); // [ 2, 3 ]
// console.log("original ", nArr); // original  [0, 1, 6, 4, 5, 6, 7]


