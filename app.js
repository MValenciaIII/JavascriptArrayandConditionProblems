
//Creating an array
let fruits = ["apple","strawberry","cherry","orange"];
//Variables can work as index nums
let kid = 1;


console.log(fruits);
console.log(fruits[3]);
console.log(fruits[kid]);

//updating array data
fruits[1] = "blueberries";
console.log(fruits)

//Adding new item to an array
let officeCharacters = ["Michael ", "Jim", "Dwight"];
console.log(officeCharacters);

//.push = adds new data at the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters);

//.pop = remove the last item in the array
officeCharacters.pop();
console.log(officeCharacters)

//.unshift = Adds a new item to the front of the array
officeCharacters.unshift("Dwight");
console.log(officeCharacters)
console.log(officeCharacters.length);

//.shift = removes the first item in the array
officeCharacters.shift();
console.log(officeCharacters);

//.length = gives us the total number of items in a array
console.log(officeCharacters.length);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array