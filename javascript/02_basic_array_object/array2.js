// Array methods 

// concanating 2 or more array with diffrent methods

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const hero = ["saktiman", "krish"];

// 1. by using push method where 

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// output - dc_heros store as a new array in marvel array but it is not a good way 
    // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// 2. using Array.concat(newArray1, newArr2) , this method returns new array in result (After merging them) 
// const hero = ["saktiman", "krish"];
// const newArray = marvel_heros.concat(dc_heros,hero);
// console.log(newArray);
// output - [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman', 'saktiman', 'krish ]


// 3. using spread [...] operator (prefrable in industries) it also return new array in result

// const usingSpread = [...marvel_heros, ...dc_heros, ...hero];
// console.log(usingSpread);

// output : [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman', 'saktiman', 'krish ]


// ------------- flat method -----------
// it will combine all nested array in 1 array and return newarray in result

// const numArray = [1,2,3, [1,2,3,4], 5,6,[9,12, [2,34,5,6]]];

// array.flat(depth to be coverd);
// console.log(numArray.flat(1)); // only cover 1 step nested array
// output :  [ 1, 2, 3, 1, 2, 3, 4, 5, 6, 9, 12, [ 2, 34, 5, 6 ] ]


// console.log(numArray.flat(Infinity));
// output : [1, 2, 3, 1,  2, 3, 4, 5, 6, 9, 12, 2, 34, 5, 6]


// ----------other method-----------
// 1. Array.isArray()
// console.log(Array.isArray('anil')); //check anil is a array or not

// output :  false 


// 2. Array.from()
// console.log(Array.from('anil')); // make a new array from anil

// // output : [ 'a', 'n', 'i', 'l' ]

// console.log(Array.from({name:"anil"})); //it can not make array from this 
// // output : []   //return empty array


// 3. Array.of(val1, val2, val3);
// of() will create new array from given values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); 

// output : [ 100, 200, 300 ]