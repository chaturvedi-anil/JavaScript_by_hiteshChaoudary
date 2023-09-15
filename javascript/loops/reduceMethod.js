// reduce  // we can use to total price of the shopping card or cart  

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0); // The initial value is 0

// console.log(sum); // Output: 15



// // using arrow function 
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => 
// {
//     return accumulator + currentValue;
// }, 0); // The initial value is 0

// console.log(sum); // Output: 15


// usefull in shopping cart
let shoppingCart = [
    {
        courseName : " js ",
        price : 3000
    },
    {
        courseName : " java ",
        price : 5000
    },
    {
        courseName : " mern development ",
        price : 30000
    },
    {
        courseName : "android dev ",
        price : 40000
    },
]

let totalPrice = shoppingCart.reduce((acc , courses) => acc + courses.price, 0 ); //0 is intial value

console.log(totalPrice); //78000