//Array and Object Problems

//Array Problem 1

console.log("Array Problem 1: An Array of books");

favoriteBooks = ["Treasure Island", "Sword Art Online", "Nisekoi", "Mushoku Tensei", "Konosuba"];
console.log(favoriteBooks);
favoriteBooks.push("Naruto");
console.log(favoriteBooks);
favoriteBooks.pop();
console.log(favoriteBooks);
favoriteBooks.unshift("Dragon Ball");
console.log(favoriteBooks);
favoriteBooks.shift();
console.log(favoriteBooks);

//Array Problem 2

console.log("Array Problem 2: Remove an item from an Array of Colors");

colors = ["Red", "Yellow", "Blue", "Green"];
console.log(colors);
green = colors.pop();
console.log(green);
console.log(colors);

//Array Problem 3

console.log("Array Problem 3: an array of names and greet each person");

names = ["Tyler", "Noelle", "Sophie", "Michael", "Jack"];

console.log(names);

for(let i = 0; i < names.length; i++){
    console.log(`Hello, ${names[i]}`)
};

//Object Problem 1

console.log("Object Problem 1: Create an Object representing a Student");

let student = {
    name: "Ryan Berkley",
    age: 19,
    grade: "B+",
};

console.log(student.name, student.grade);
console.log(student);

//Object Problem 2

console.log("Object Problem 2: Updating previous object and adding a new property");

student.grade = "A";
student.university = "Mississippi Gulf Coast Community College";

console.log(student);

//Object Problem 3

console.log("Object Problem 3: Creating a Car Object");

let car = {
    make: "Chevrolet",
    model: "Malibu",
    year: "2025",
};

let propertyName = "model"
console.log(car[propertyName]);

car["color"] = "Blue";
console.log(car);