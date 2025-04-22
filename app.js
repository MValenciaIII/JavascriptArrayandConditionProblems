
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


colors[!2] = "cyan"
colors.pop();
colors.push("orange")
//* Output the results
console.log(colors);




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


/*
!THESE ARE THE ONLY FALSY VALUES
- false
- 0 
- -0 
- 0n
- ""
- '' (empty strings)
- null 
- undefined
- NaN

*/

// if Else Structure
let amHungry = "";

if(amHungry) {
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


//!PSUEDOCODE DEBUGGER BREAKING DOWN PROBLEMS


//! Favorite Fruit Checker
//TODO Define an array of favorite fruits
//? SET array favFruit = [item1, item2,...]
const favFruits = ["pineapple", "orange", "strawberry", "grapes"]
//TODO Define a variable for the fruit to check
//? SET string fruit = "item"
let fruit = "orange"
//* STEP 3 Check IF the fruit is in the array 
//console.log(fruit == favFruits[0]);
//* and OUTPUT the RESULT
//? IF statement will be involved
//? checking to see if VAR fruit is on the VAR favFruit list;

if (fruit == favFruits[0] || fruit == favFruits[1] || fruit == favFruits[2] ||fruit == favFruits[3] ) {
    console.log("Hey I'm a favorite food!")
} else {
    console.log("Yuck, not my taste!")
}
// if (fruit == favFruits[0]) {
//   console.log("Hey I'm a pinapple fruit!")

// } else if(fruit == favFruits[1]) {
//   console.log("Hey I'm a orange fruit!")

// } else {
//     console.log("Yuck, not my taste!")

// }


//! Grade Categorizer
//TODO Define a variable for the grade
//? SET INT gradeNum = 0;
let gradeNum = 78;

//TODO Categorize the grade
//? IF statement? 
//? IF VAR gradeNum is BETWEEN 100 and 90 = A;
//? ELSE IF VAR gradeNum is BETWEEN 89 and 80 = B; 
//? ELSE IF VAR gradeNum is BETWEEN 79 and 70 = C; 
if (gradeNum >= 90 && gradeNum <= 100) {
    console.log("You've received an A!");
} else if (gradeNum >= 80 && gradeNum <= 89) {
    console.log("You've received a B!");
} else if (gradeNum >= 70 && gradeNum <= 79) {
    console.log("You've received a C!");
} else if (gradeNum >= 60 && gradeNum <= 69) {
    console.log("You've received a D!");
} else {
    console.log("You've failed!")
}
//* output the result
//? console.log(GRADE LETTER);





//! Day of the Week Checker
//TODO Define an array of days of the week
//? SET array daysOfTheWeek = [];
const daysOfTheWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
//TODO Define a variable for the day to check
//? SET string day = "Monday";
let day = "thursday"
//TODO Check if the day is a weekday or weekend 
//? IF statement? 
//? Conditions: 
//? - Day of a week
//? - weekends: "saturday" || "sunday";
//? - weekdays: "monday" || "tuesday" || "wednesday" || "thursday" || "friday"

switch (day) {
    case daysOfTheWeek[0]:
        console.log("It's the weekend! :D");
        break;
    case daysOfTheWeek[1]:
        console.log("It's the Weekday! D:");
        break;
    case daysOfTheWeek[2]:
        console.log("It's the Weekday! D:");
        break;
    case daysOfTheWeek[3]:
        console.log("It's the Weekday! D:");
        break;
    case daysOfTheWeek[4]:
        console.log("It's the Weekday! D:");
        break;
    case daysOfTheWeek[5]:
        console.log("It's the Weekday! D:");
        break;
    case daysOfTheWeek[6]:
        console.log("It's the Weekend! :D");
        break;    
    default:
        console.log("This day doesn't exist??");
}
//* output the result

if (day == daysOfTheWeek[0] || day == daysOfTheWeek[6]) {
    console.log("It's the Weekend! :D");
} else if (day == daysOfTheWeek[1] || day == daysOfTheWeek[2] || day == daysOfTheWeek[3] || day == daysOfTheWeek[4] || day == daysOfTheWeek[5] ) {
    console.log("It's the Weekday! D:");
} else {
    console.log("This day doesn't exist??");
}


//! Temperature Checker
//TODO Define a variable for the temperature
//? SET INT currentTemp = NUM;
let currentTemp = 70;
//TODO Categorize the temperature and 
//? If Structure
//? 3 conditions:
//? HOT - currentTemp >= 85
//? just right - currentTemp < 85 AND currentTemp <= 60
//? COLD - currentTemp < 60

if (currentTemp >= 85) {
    console.log("Aye it's way too HOT brother!");
} else if (currentTemp < 85 && currentTemp >= 60) {
    console.log("Keep it like this Dude! Just right!");
} else {
    console.log("I'm freezing. Global warming isn't real!")
}
//*output the result


//! Number Sign Checker
//TODO Define a variable for the number
//? SET INT num = NUMBER;
let num = 0;
//TODO Check the sign of the number
//? Switch Statement
//? 3 conditions:
//? If num > 0
//? If num == 0;
//? if num < 0;

switch (true) {
    case (num > 0):
        console.log("THis is a positive Number!");
        break;
    case (num == 0):
        console.log("This is a zero number");
        break;
    case (num < 0):
        console.log("This number is negative!");
        break;
}

if (num > 0 ) { 
    console.log("THis is a positive Number!");
} else if (num === 0) {
    console.log("This is a zero number")
} else if (num < 0) {
    console.log("This number is negative!");
}

//* output the result



//! DIfferences between "==" and "==="

//? "==" definition: "is loosely equal to"

let leftNum = 4;
let rightNum = "4";

console.log(leftNum == rightNum);
//! TRUE

//? "===" definition: "STRICTLY equal to"

console.log(leftNum === rightNum);
//! FALSE

let password = "UndER28S@#fdd"
let password2 = "under28s@#fdd"

console.log(password === password2);


//? "const" is a reserved word (ex. let, var) 
//? what it means "const" - makes your stored information in a variable not changable;


const myName = "Margarito Valencia III";


