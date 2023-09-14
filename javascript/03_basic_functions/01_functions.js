// 

// this operator called as REST [...] operator in function but spread operator in other case
// const calculateCartPrice = function(...num1)
// {
//     return num1;
// }

// console.log(calculateCartPrice(2,3,4,5,5));

// [ 2, 3, 4, 5, 5 ] returned array as result

// const calculateCartPrice = function(val1, val2, ...num1)
// {
//     return num1;
// }

// console.log(calculateCartPrice(2,3,4,5,5));

// [ 4, 5, 5 ] , means val1=2, val2=3 


// ---------passing object in function------
// let user = {
//     name: "anil",
//     age: "44"
// }

// const printObj = function(anyObject)
// {
//     console.log(`name ${anyObject.name} and age ${anyObject.age}`);
// }

// printObj(user);



//----------passing array in function-----------

let arr= [1,2,3,4];

const returnSecondValue = function(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(arr));