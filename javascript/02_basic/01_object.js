
// object literals  , we can give any type of data in object 

const mySym = Symbol('myKey');
const jsUser = 
{
    "full name": "anil chaturvedi",  //this type of key only accessible by jsUser.["full name"] square bracket  
    age: 20,
    location: "satna",
    email: "anil@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday", "tuesday"],      
    // mySym : "this is symbol"  // if we declare symbol this way it is not a symbol it is string

    [mySym] : "this is my symbol original"
}

// output after declaring symbol 
// {
//     'full name': 'anil chaturvedi',
//     age: 20,
//     location: 'satna',
//     email: 'anil@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'monday', 'tuesday' ],
//     [Symbol(myKey)]: 'this is my symbol original' //this is symbol
//   }

// console.log(jsUser.email);
// console.log(jsUser["full name"]);  //this type of value is only accessible by [],

// console.log(typeof jsUser.mySym);  //output : string

// console.log(Object.getOwnPropertySymbols(jsUser)); // [ Symbol(myKey) ]

// jsUser.email = "anil@fb.com";  // you can change the value
// console.log(jsUser.email);

// Object.freeze(jsUser);  // this is mean this objet is locked now you can't change any value of this object

// not affectable after this line 
// jsUser.email = "anil@google.com"
// jsUser.age = 23;

// console.log(jsUser);

// jsUser.greeating = function()
// {
//     console.log('this is greeating fucntion');
// }

// console.log(jsUser.greeating); //this line will return function difination
// console.log(jsUser.greeating()); //this line will invoke function 


// jsUser.greeating2 = function()
// {
//     //this keyword refer to the current object
//     console.log(`this is greeating fucntion , name ${this["full name"]}`); 
//     //output : this is greeating fucntion , name anil chaturvedi
// }

// console.log(jsUser.greeating2());
// output: undefined