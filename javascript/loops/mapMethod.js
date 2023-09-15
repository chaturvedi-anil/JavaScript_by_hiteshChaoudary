// map : map allways return full array after the specifice operation given by user


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )  //final value pass to next method
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


// map method in array of object

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

const names = people.map(function(person) {
    return person.name;
});

console.log(names); // Output: ["Alice", "Bob", "Charlie"]
