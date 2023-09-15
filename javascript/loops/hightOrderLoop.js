// for of loop and for in loop
// for...of iterates over the values of an iterable.
// for...in iterates over the keys or indices of an iterable.

// note --> In most cases, when you want to work with the values of an array, you should use the for...of loop because it simplifies the code and provides access to the actual values directly. The for...in loop is typically used when you need to iterate over the properties of an object, not an array.

// // with array
// let newArray = [10,20,30,40,50];

// // for...of loop
// for (const val of newArray) 
// {
//     console.log(val);
// }
// //output:  10 20 30 40 50  //in new line

// // for...in loop
// for (const val in newArray) 
// {
//     console.log(val);
// }
// //output:  0 1 2 3 4   //in new line (print indices of array)


// both loop behaviour in object 

let newUser =
{
    name: "anil",
    city: "satna",
    gender : "male",
    age : "23",
    isLoggedIn : false
}

// The for...of loop is not designed to iterate directly over the properties of an object. It is primarily used for iterating over iterables like arrays, strings, maps, sets, and generators
// // for...of with object 
// for (const key of newUser) 
// {
//     console.log(`For of   : ${key}`);
// }

// output - error

// for...in with object
for (const key in newUser) 
{
    if (Object.hasOwnProperty.call(newUser, key)) 
    {
        const element = newUser[key];
        console.log(`for In :  ${element}`);
    }
}

// output - 
// for In :  anil
// for In :  satna
// for In :  male
// for In :  23
// for In :  false