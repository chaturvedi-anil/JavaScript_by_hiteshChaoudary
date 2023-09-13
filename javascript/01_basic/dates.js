let date = new Date();
// console.log(date); 
// console.log(date.getTime());  //give result into miliseconds like. 1694617437748
// console.log(date.getFullYear()); //gives exact year like. 2023
// console.log(date.toLocaleDateString()); // gives exact date like. 13/9/2023
// console.log(date.toLocaleString()); //gives exact date with time like 13/9/2023, 8:33:57 pm
// console.log(date.toLocaleTimeString()); // gives exact time like. 

let newDate = date.toLocaleString('default',{
    day: 'numeric', // 13
    weekday: 'long', // wednesday
    month: 'long' // september
});

console.log(newDate);