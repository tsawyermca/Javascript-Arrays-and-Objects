//Array Setup
let fruits = ["Apple","Strawberry","Cherry","Orange"];

//logs entire Array
console.log(fruits);

//Selects a specific item within the array with [], first item is "0"
console.log(fruits[0]);

//Variables can function as index numbers
var three = 3;
console.log(fruits[three]);

//Update an Array
fruits[1] = "Blueberry";
console.log(fruits[1]);

//Add a new item to the end of an Array, use .push
fruits.push("Strawberry");
console.log(fruits);

//Remove the last item in an Array, use .pop
fruits.pop();
console.log(fruits);

//Use .length to give a total number of items in an array
console.log(fruits.length);

//Use .splice to add items into the middle of an array
//.splice is written as (*Where you want it added in Array*, *How many items in Array get deleted*, *What item is being added to array*)
fruits.splice(3,0,"Grapes");
console.log(fruits);

//Objects

//Similar to Arrays but more detailed

//Object setup

let favoriteCharacter = {
    fName: "Ceres",
    lName: "Fauna",
    hobbies: ["Gaming"," Streaming"," Singing"],
    age: "4.54 bil",
};

//Calls entire object
console.log(favoriteCharacter);

//Calls specific property/ies
console.log(`My favorite character is ${favoriteCharacter.fName} ${favoriteCharacter.lName}`);

//Calls property that has an array
console.log(`Her hobbies include ${favoriteCharacter.hobbies} but her favorite is ${favoriteCharacter.hobbies[0]}`);

//Updating a propery
favoriteCharacter.age = "30";
console.log(favoriteCharacter.age);

//Add a new property to object
favoriteCharacter.ASMR = 100;
console.log(favoriteCharacter);