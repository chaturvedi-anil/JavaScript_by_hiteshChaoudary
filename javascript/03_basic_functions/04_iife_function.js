//------------Imedietly invoked function expression---------------
// end iffe function with semicolon

(function fun1(){
    // This variable is encapsulated within the IIFE
    var privateVar = "I'm private";

    // Function inside the IIFE
    function privateFunction() {
        console.log("I'm a private function");
    }

    // These won't pollute the global scope
})();

// Attempting to access privateVar or privateFunction here would result in an error
// console.log(privateVar); // Error: privateVar is not defined
// privateFunction(); // Error: privateFunction is not defined
  
(function (name){
    console.log(name);
})('anil');
// output : anil


// with arrow function
((getVal)=>{
    console.log(getVal);
})("arrow iffe");

// output : arrow iffe


// -----polluting the global scope meaning

// In JavaScript, "polluting the global scope" refers to the practice of adding variables and functions to the global object (usually window in web browsers) or the global scope. When you declare variables or functions without properly scoping them, they become accessible from anywhere in your code, potentially leading to naming conflicts, unintended behavior, and security issues. This is especially problematic in larger codebases and when working with multiple libraries or scripts.