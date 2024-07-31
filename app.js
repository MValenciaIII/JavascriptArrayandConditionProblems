
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

//! Access Array Elements
//TODO Define an array of items
let items = ["apple", "banana", "cherry", "date", "elderberry"];

//TODO Access specific elements
let firstItem = items[0];
let thirdItem = items[2];
let lastItem = items[items.length - 1];

//* Output the results
console.log("Items: " + items);
console.log("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);


//! List of Favorite Movies

//TODO Define an array of favorite movies
let movies = ["Treasure Planet", "The Nice Guys", "500 Days of Summer"]
//* Output each movie individually
console.log(`Movie One: ${movies[0]}`);
console.log("Move One: " + movies[0]);
console.log(`Movie Two: ${movies[1]}`);
console.log(`Movie Three: ${movies[2]}`);

//! Sum of Array Elements
//TODO Define an array of numbers
let nums = [8, 20,2, 10, 12]
//TODO Calculate sum of the numbers
let sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4]; 
//* Output the result
console.log(sum);


//! Concatenate Strings in an Array

//TODO Define an array of strings
let words = ["There are ", "only happy accidents!", "no mistakes ", " - Bob Ross"];
//TODO Concatenate the strings
let sentence = words[0] + words[2] + words[1] + words[3];
//* Output the result
console.log(sentence)


//! Update Array Elements

//TODO Define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"];
//TODO Update 
//? green to cyan
//? purple to orange

//Random numbers
let rng = Math.floor(Math.random() * Math.floor(colors.length));

let number1 = Math.floor(2);
console.log(number1);


colors[2] = "cyan"
colors.pop();
colors.push("orange")
//* Output the results
console.log(colors[rng]);




//!CONDITIONS

let boo = false;
console.log(boo)
/*
 "==" - "is equal to"
*/
let bar = 4 == 5-4;
console.log(bar);

let boo2 = "4"
let boo3 = 5
let boo4 = "four"

console.log(boo2 == boo3);
//?TRUE

//Strictly Equals to "==="

console.log(boo2 === boo3);
//?FALSE

//Not equal to "!="

console.log(boo3 != boo4);
//? TRUE

//Greater than ">"
console.log(boo3 > 6);
//?FALSE

//Less than "<"
console.log(boo3 < 6);
//?TRUE

//Less than or equal to "<="
console.log(boo3 <= 4);
//?TRUE

//Greater Than or equal to ">="
console.log(boo3 >= 5);
//?False


//LOGICAL Operators

// AND = "&&"
console.log("Double Ampersans: " + (4 == 4 && 3 == 3));

// OR = "||"
console.log("Double LINES: " + (4 == 3 || 3 == 3));

// NOT = "!"
console.log("NOT : " + (!false));


//If Structure
if (boo3 == 4) {
    console.log("HEY I'm THE NUMBER 4!");
};


// if Else Structure
let amHungry = true;

if(amHungry == true) {
    console.log("Let's eat! I want Chicken nuggies!");
} else {
    console.log("Let's keep coding! Yay!");
};

//Else if Structure

let howHungry = 0;

if (amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry I can eat a horse.")
} 
else if (amHungry=== true && howHungry >= 25) {
    console.log("I'm hungry enough to eat cheez-its.")
} 
else if (amHungry === false && howHungry >= 25) {
    console.log("I'm depressed.")
} 
else {
    console.log("I'm not that hungry dude.")
};

//Switch Statement 
switch (amHungry == true) {
    case howHungry >= 75:
        console.log("I'm so hungry I can eat a horse.")
        break;
    case howHungry >= 25:
        console.log("I'm hungry enough to eat cheez-its.")
        break;
    default:
        console.log("I just wanna eat to eat.");
}