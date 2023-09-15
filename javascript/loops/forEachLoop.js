// const numbers = [1, 2, 3, 4, 5];

// // Using forEach to iterate over the array
// numbers.forEach(function(element, index, array) 
// {
//     // 'element' represents the current element in the array
//     // 'index' is the index of the current element
//     // 'array' is the original array being iterated over

//     console.log(`Element at index ${index}: ${element}`);
// });

// // You can also use an arrow function for a more concise syntax
// numbers.forEach((element, index) => {
//     console.log(`Element at index ${index}: ${element}`);
// });


const users = [
    {
        name:"anil",
        age: 5,
        city: "satna"
    },
    {
        name:"akash",
        age: 53,
        city: "atarra"
    },
    {
        name:"abhay",
        age: 34,
        city: "satna"
    }
]

function giveUserDetails(user)
{
    // item is a single object
    // console.log("name : ",user.name);
    // console.log("age : ",user.age);
    // console.log("city : ",user.city);

    console.log(user);
}

users.forEach(giveUserDetails)

// // output : 
// { name: 'anil', age: 5, city: 'satna' }
// { name: 'akash', age: 53, city: 'atarra' }
// { name: 'abhay', age: 34, city: 'satna' }