// a Map is a built-in data structure that allows you to store key-value pairs and retrieve the values associated with specific keys. Unlike regular JavaScript objects, which only allow strings and symbols as keys, Map objects can use any data type as keys, including objects, functions, and primitive data types.

// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set(42, "Answer to the Ultimate Question of Life, the Universe, and Everything");
myMap.set(true, "A boolean value");

// Getting values from the Map
console.log(myMap.get("name")); // Output: John
console.log(myMap.get(42));      // Output: Answer to the Ultimate Question of Life, the Universe, and Everything
console.log(myMap.get(true));    // Output: A boolean value

// Checking if a key exists in the Map
console.log(myMap.has("age"));   // Output: false

// Deleting a key-value pair from the Map
myMap.delete(42);

// Checking the size of the Map
console.log(myMap.size);        // Output: 2

// Iterating over the Map using for...of loop
for (const [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Output:
// Key: name, Value: John
// Key: true, Value: A boolean value
