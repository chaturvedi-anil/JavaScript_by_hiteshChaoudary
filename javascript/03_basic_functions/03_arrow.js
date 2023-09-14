// function regularFunction() {
//     console.log("Regular function");
//     console.log(this); // 'this' refers to the calling context (can change)
//     console.log(arguments); // 'arguments' object is available
//   }
  
//   const obj = {
//     name: "John",
//     greet: regularFunction,
//   };
  
//   obj.greet();

//  output
// Regular function
// { name: 'John', greet: [Function: regularFunction] }
// [Arguments] {} 


  const arrowFunction = () => {
    console.log("Arrow function");
    console.log(this); // 'this' is captured from the surrounding context
    // 'arguments' is not available; it inherits from the containing function, if any
  };
  
  const obj1 = {
    name: "Alice",
    greet: arrowFunction,
  };
  
obj1.greet();

//  output
// Arrow function
// {}

// changin global this 
this.name = "anil"
obj1.greet();

// output

// Arrow function
// { name: 'anil' }
  