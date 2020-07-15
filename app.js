var name = "Shane";
console.log(name);

var myLocation = "Las Vegas";
console.log(myLocation);

var faveNumber = 13;
console.log(faveNumber);

var colors = ["blue", "green", "red", "orange", "white"];
console.log(colors);

// WHILE LOOPS
var number = 10;
var otherNumber = 1;
while (otherNumber < number) {
    console.log(otherNumber);
    //otherNumber += 1;
    otherNumber = otherNumber + 1
}

var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber);
    myOtherNumber += 1; // adds 1 to myOtherNumber and reruns the loop until the condition is not met
}

var favoriteNumber = 13;
var upToHundred = 100;

while (favoriteNumber < upToHundred) {
    console.log(favoriteNumber);
    favoriteNumber += 1;
}

// FOR LOOPS

for (var i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

//PRINT COLORS


for (var i = 0; i < colors.length; i++) {
    var eachColor = colors[i];
    console.log(eachColor);
}

// make an array
// use a for loop to iterate through your array
// print each element in your array

var deskItems = ["Monitor", "Keyboard", "Computer", "Water bottle"];

for (var i = 0; i < deskItems.length; i++) {
    var eachItem = deskItems[i];
    console.log(eachItem);
}

//

const cars = ["Tesla", "Honda", "Ford", "Toyota"];

for (let i = 0; i < cars.length; i++) {
    let eachCar = cars[i];
    console.log(eachCar);
}

//OBJECTS
// key: value pairs

const shane = {
    fullName: 'Shane Bendak',
    age: 27,
    myLocation: 'Las Vegas',
    placesTraveled: ["Texas", "Ohio", "Pennsylvania", "New York"]
}

console.log(shane);
//myLocation
console.log(shane.myLocation);
// specific element out of an array using array index []
console.log(shane.placesTraveled[2]);

// likes, caption, shares, comments, username, picture
const myReallyCoolPost = {
    username: '@generalassembly',
    likes: 12,
    comments: ['nice', 'cool', 'js'],
    caption: 'Day 3 of SEI',
    picture: 'img link',
    shares: 2
}
console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = 'Las Vegas';
console.log(myReallyCoolPost);

// instigram post object

const instaPost = {
    username: '@thatboi',
    likes: 14,
    comments: ['Why?', 'What?', 'Who?', 'When?'],
    caption: 'Buruning down my favorite AppleBees',
    picture: 'img picture',
    shares: 3,
    myLocation: 'Downingtown, PA'
}

console.log(instaPost);

let sentence = "I'm Cool";
let sentenceTwo = "I'm cool too";

const fourthOfJuly = {
    username: '@ga'
}

fourthOfJuly.pictures = "https://instagram.com/skhgkjfgb";
fourthOfJuly.likes = 15;
fourthOfJuly.comments = ['ok...'];
fourthOfJuly.captions = 'Writing code of the 4th';

console.log(fourthOfJuly);