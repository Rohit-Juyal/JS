// console.log("Hey! How are you");
// console.log("Bye");
// window.alert("I'm Sorry!");

// let firstname = "Rohit";      // strings
// let age = 19;     // numbers
// let student = true;      // booleans

// console.log("Hello!", firstname);
// console.log("You are", age, "years old");
// console.log("Enrolled", student);

// document.getElementById("p1").innerHTML = "Hello " + firstname;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;


// let username = window.prompt("What's your name ?")
// console.log(username);


// let username;

// document.getElementById("myButton").onclick = function(){

//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }



// Type Conversion

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log("Happy Birthday! YOu are", age, "years old");


// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza");

// console.log(x, typeof(x));
// console.log(y, typeof(y));
// console.log(z, typeof(z));

// Constant

// const pi = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log("The Circumference is:", circumference);

// x = Math.PI;
// console.log(x);


// let a;
// let b;
// let c;

// document.getElementById("btn").onclick = function(){
//     a = document.getElementById("aInput").value;
//     a = Number(a);
//     b = document.getElementById("bInput").value;
//     b = Number(b);
//     document.getElementById("cInput").value = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
     
// }

// let count = 0;
// document.getElementById("decrease").onclick = function(){
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("reset").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("increase").onclick = function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function(){
//     x = Math.ceil(Math.random() * 6);
//     y = Math.ceil(Math.random() * 6);
//     z = Math.ceil(Math.random() * 6);

//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;
// }
 


// let fullname = "Rohit Juyal";
// let firstname;
// let lastname;

// firstname = fullname.slice(0, fullname.indexOf(" "));
// lastname = fullname.slice(fullname.indexOf(" ") + 1);
// console.log(firstname);
// console.log(lastname);



// let username =  "rohit";
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// console.log(letter);

// let letter = username.charAt(0).toUpperCase().trim();
// console.log(letter);

// let age = 19;

// if(age >= 18){
//     console.log("You are an adult!");
// }
// else if(age < 0){
//     console.log("You haven't been born yet!");
// }
// else{
//     console.log("You are a child!");
// }


// let online = true;

// if(online){
//     console.log("You are online!");
// }
// else{
//     console.log("You are offline!");
// }

// document.getElementById("btn").onclick = function(){
//     if(document.getElementById("mycheckbox").checked){
//         console.log("Nice");
//     }
//     else{
//         console.log("Not Nice");
//     }
// }


// for(let i = 10; i > 0; i--){
//     console.log(i);
// }
// console.log("Happy New Year!");


// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         break;
//     }
//     console.log(i);
// }
// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// }

// let rows = window.prompt("Enter number of rows");
// let column = window.prompt("Enter number of columns");

// for(let i = 1; i <= rows; i++){
//     for(let j = 1; j <= column; j++){
//         document.getElementById("myRectangle").innerHTML += "#";
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }


// Function

// function happyBirthday(){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you")
// }

// happyBirthday();
// happyBirthday();
// happyBirthday();

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:",area);

// function getArea(width, height){
//     return width * height;
    
// }



// Ternanry operator

// let adult =  checkAge(23);
// console.log(adult);

// function checkAge(age){
//     return age >= 18 ? true : false;
// }


// Template literals

// let username = "Bro";
// let items = 3;
// let total = 56;

// console.log(`Hello ${username}`);
// console.log(`You have ${items} in your cart`);
// console.log(`Your total is $${total}`);

// toLocaleString()

// let myNum = 100;

// myNum = myNum.toLocaleString("hi-IN");
// console.log(myNum);


// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// console.log(myNum);

// myNum = myNum.toLocaleString(undefined, {style: "percent"});

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// console.log(myNum);



// document.getElementById("submitBtn").onclick = function(){

//     let temp;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C"
//     }
//     else if(document.getElementById("fButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahreneit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F"

//     }
//     else{
//         document.getElementById("tempLabel").innerHTML = "Select a unit";
//     }

// }

// function toCelsius(temp){
//     return (temp - 32) * (5/9);
// }

// function toFahreneit(temp){
//     return temp * 9/5 + 32;
// }



// Array


// let fruits = ["apple", "orange", "banana"]

// fruits[2] = "coconut";

// fruits.push("mango");

// fruits.pop();

// fruits.unshift("lemon");  // add element to the beginning

// fruits.shift();   // removes element from beginning

// let length = fruits.length;
// console.log(length);

// let index = fruits.indexOf("kiwi");
// console.log(index);

// console.log(fruits);
// console.log(fruits[0]);



// let prices = [5, 10, 15, 20, 25, 30];

// for(let i = 0; i < prices.length; i++){
//     console.log(prices[i]);
// }
// for(let i = prices.length - 1; i >= 0; i--){
//     console.log(prices[i]);
// }


// for(let price of prices){
//     console.log(price);
// }


// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit); 
// }



// 2D array = An array of arrays

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[0][1] = "mongoes";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }




// spread operator ...   unpacks the element


// let username = "Rohit Juyal";
// console.log(...username);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...numbers);


// let maximum = Math.max(...numbers);
// console.log(maximum);


// let class1 = ["john", "harry", "tipi"];
// let class2 = ["ggs", "henry", "goku"];

// class1.push(...class2);

// console.log(...class1);




// rest parameter     packs argument into an array


// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,b,c,d,e,));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }



// callback = a function passed as an argument to another function

// let total = sum(2,3);
// displayConsole(total);
// displayDom(total);


// function sum(x,y){
//     let result = x + y;
//     return result;
// }

// sum(2, 3, displayConsole);

// function sum(x, y, callback){
//     let result = x + y;
//     callback(result);
// }



// function displayConsole(output){
//     console.log(output);
// }

// function displayDom(output){
//     document.getElementById("myLabel").innerHTML = output;
// }



// array.forEach() = executes a provided callback function once for each array element

// let students =["john", "mike", "blue"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// // console.log(students[0]);

// function print(element){
//     console.log(element);
// }



// Array.map  



// let numbers = [1, 2, 3, 4, 5];

// let squares = numbers.map(square);

// let cubes = numbers.map(cube);

// // print(squares);

// squares.forEach(print);

// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(element){
//     console.log(element);
// }





// Array.filter()


// let ages = [20, 16, 17, 18, 21, 96];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }




// array.reduce()  


// let prices = [5, 10, 15, 20, 25, 30];

// let total = prices.reduce(checkOut);

// console.log(`The total is: ${total}`);

// function checkOut(total, element){
//     return total + element;
// }



// let grades = [60, 85, 92, 28, 257];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x, y){
//     return y - x;
// }
// function ascendingSort(x, y){
//     return x - y;
// }

// function print(element){
//     console.log(element);
// }






// function expression = function without a name (anonymous funtion)




// const greeting = function(){
//     console.log("Hello!");
// }


// greeting();

// let count = 0;

// document.getElementById("incButton").onclick = function(){
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decButton").onclick = function(){
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }




// arrow function


// const greeting = function(username){
//     console.log(`Hello ${username}`);
// }

// greeting("Rohit Juyal");


// const greeting = username => console.log(`Hello ${username}`);

// greeting("Rohit Juyal");


// const percent = (x, y) => x / y * 100;

// console.log(`${percent(40, 50)}%`);



// let grades = [100, 50, 60, 70, 30];

// grades.sort((x, y) => y - x );

// grades.forEach((element) => console.log(element));





// Shuffle an array


// let cards = ["A", "2", "3", "4", "5", "6","7", "8", "9", "10", "J", "K", "Q"];

// console.log(shuffle(cards));

// // console.log(cards);

// cards.forEach(card => console.log(card));

// function shuffle(array){
//     let currentIndex = array.length;

//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex--;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;

// }




// nested function


// let userName = "Rohit";
// let userInbox = 12;


// login();

// function login(){
//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}`);
//     }
    
//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new messages`);
//     }
// }


// Map = object that holds key value pair of any data type

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 45],
//     ["socks", 54]
// ]);


// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("socks");
// console.log(shoppingCart);


// store.set("hat", 50);
// store.delete("hat");
// console.log(store.has("hat"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));



// object 

// const car1 = {
//     model:"Mustang",
//     color:"red",
//     year:2022,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }
// const car2 = {
//     model:"Corvette",
//     color:"blue",
//     year:2024,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();


// this = reference to a particular object
//        the object depends on the immediate context


// const car1 = {
//     model:"Mustang",
//     color:"red",
//     year:2022,

//     drive : function(){
//         console.log(`You drive the ${this.model}`);
//     }
// }
// const car2 = {
//     model:"Corvette",
//     color:"blue",
//     year:2024,

//     drive : function(){
//         console.log(`You drive the ${this.model}`);
//     }
// }

// car1.drive();
// car2.drive();




// class = a blueprint for creating objects
//         define what properties and methods they have
//         use a constructor for unique properties


// class Player{
//     score = 0;
    
//     pause(){
//         console.log("You paused the game");
//     }
//     exit(){
//         console.log("You exited the game");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();

// player1.score = 10;

// console.log(player1.score);

// console.log(player2.score);

// player1.pause();
// player2.exit();


// constructor = a special method of a class,
//               accepts arguments and assign properties

// class Student{

//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Ron", 30, 9.9);
// const student2 = new Student("Carl", 20, 5.6);
// const student3 = new Student("Jeddy", 32, 7.2);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

// console.log(student3.name);
// console.log(student3.age);
// console.log(student3.gpa);
// student3.study();    




// static = belongs to the class, not the objects


// class Car{

//     static numberOfCars = 0;

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars += 1;
//     }

//     static startRace(){
//         console.log("3....2....1...Go!");
//     }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("BMW");
// const car3 = new Car("Corvette");
// const car4 = new Car("Nano");
// const car5 = new Car("Ferrari");

// console.log(Car.numberOfCars);
// Car.startRace();




// inheritace = a child class can inherit all the methods and properties from another class

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }

// }

// class Rabbit extends Animal{

//     alive = true;
//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is runnning`);
//     }
// }
// class Fish extends Animal{

//     alive = true;
//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{

//     alive = true;
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }


// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();



// super = Refersto the parent class.
//         commonly used to invoke constructor of a parent class

// class Animal{

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{

//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{

//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 3, 10);
// const fish = new Fish("fish", 1, 30);
// const hawk = new Hawk("hawk", 5, 200);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);


// get = binds an object property to a function
//       when that property is accessed
// set = binds an object property to a function
//       when that property is assigned a value

// class Car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }


// let car = new Car(400);

// car.gas = 25;

// console.log(car.power);
// console.log(car.gas);





// objects as arguments


// class Car{

//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Ferrari", 2022, "yellow");

// changeColor(car3, "black");

// displayInfo(car1);
// displayInfo(car2);
// displayInfo(car1);


// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// function changeColor(car,color){
//     car.color = color;
// }




// Array of objects

// class Car{

//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log(`You drive this ${this.model}`);
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Ferrari", 2022, "yellow");
// const car4 = new Car("Lambo", 2022, "yellow");

// const cars = [car1, car2, car3, car4];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }




// anonymous objects = Objects without a name 
//                     not directly referenced
//                     Less syntax. No need for unique names


// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Diamonds");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("2", "Hearts");
// let card6 = new Card("2", "Spades");
// let card7 = new Card("2", "Diamonds");
// let card8 = new Card("2", "Clubs");

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

// let cards = [new Card("A", "Hearts"), 
//             new Card("A", "Spades"), 
//             new Card("A", "Diamonds"), 
//             new Card("A", "Clubs"),
//             new Card("2", "Hearts"), 
//             new Card("2", "Spades"), 
//             new Card("2", "Diamonds"), 
//             new Card("2", "Clubs")];

// console.log(cards[0].value + cards[0].suit);

// cards.forEach(card => console.log(`${card.value} ${card.suit}`));





// error = object with a description of something went wrong

// throw = executes a user-defined error


// try{
//     let x = window.prompt("Enter a number");
//     x = Number(x);

//     if(isNaN(x)) throw "This wasn't a number";
//     if(x == "") throw "This was empty";

//     console.log(`${x} is a number`);
// }

// catch(error){
//     console.log(error);
// }

// finally{
//     console.log("This always executes");
// }


// setTimeout

// setTimeout(firstMessage, 3000);
// setTimeout(secondMessage, 6000);
// setTimeout(thirdMessage, 9000);


// function firstMessage(){
//     alert(`But this course for $500!`);
// }
// function secondMessage(){
//     alert(`This is not a scam!`);
// }
// function thirdMessage(){
//     alert(`DO ITTTTTT!`);
// }


// setInterval


// let count = 0;
// let max = window.prompt("Count upto what number");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count++;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }



// The Date object is used to work with date and time

// let date = new Date();
// date = date.toLocaleString();
// console.log(date);

// document.getElementById("date").innerHTML = formatDate(date);

// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     return `${month}/${day}/${year}`;
// }





// console.time()




// start
// console.time("Response time");


// alert("Click the OK button");

// end
// console.timeEnd("Response time");




// promise



// const promise = new Promise((resolve, reject) =>{

//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File not loaded");
//     }
// });

// promise.then(value => console.log(value))
//         .catch(error => console.log(error));



// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"));



// async = makes a function return a promise


// async function loadFile(){

//     let fileLoaded = false;

//     if(fileLoaded){
//         return "File loaded";
//     }
//     else{
//         throw "File not loaded";
//     }
// }

// loadFile().then(value => console.log(value))
//             .catch(error => console.log(error));





// ES6 Modules

// import {PI, getCircumference, getArea} from "./math_util.js";

// import * as MathUtil from "./math_util.js";

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);





// DOM = Document Object Model (API)
//       An interface for changing the content of a page


// console.log(document);
// console.dir(document);     List all properties of the DOM
// console.log(document.title);
// console.log(document.URL);

// document.title = "Hey, I'm a Title";
// document.location = "http://www.google.com";

// document.body.style.backgroundColor = "pink";
// document.getElementById("myDiv").innerHTML = "Hello";


// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "blue";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })



// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor ="lightblue";


// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.backgroundColor = "lightgreen";
// desserts[1].style.backgroundColor = "green";
// desserts[2].style.backgroundColor = "darkgreen";


// let elements = document.querySelector("#myTitle");     // unique id
// elements.style.backgroundColor = "red";


// let elements = document.querySelector(".desserts");     // class
// elements.style.backgroundColor = "red";

// let elements = document.querySelectorAll("[for]");     //attribute
// elements.forEach(element => {
//     element.style.backgroundColor = "green";
// });





// DOM traversal


// let element = document.body;
// let child = element.firstElementChild;
// child.style.backgroundColor = "pink";


// let element = document.querySelector("#vegetables");
// let parent = element.parentElement;
// parent.style.backgroundColor = "green";

// let element = document.querySelector("#vegetables");
// let sibling = element.nextElementSibling;
// sibling.style.backgroundColor = "green";

// let element = document.querySelector("#vegetables");
// let sibling = element.previousElementSibling;
// sibling.style.backgroundColor = "green";

// let element = document.querySelector("#fruit");
// let child = element.firstElementChild;
// child.style.backgroundColor = "green";

// let element = document.querySelector("#fruit");
// let child = element.lastElementChild;
// child.style.backgroundColor = "green";

// let element = document.querySelector("#fruit");
// let child = element.children[1];
// child.style.backgroundColor = "green";

// let element = document.querySelector("#fruit");
// let children = Array.from(element.children);

// children.forEach(child => child.style.backgroundColor = "green");




// add/change HTML elements

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);


// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// myList.append(listItem);
// myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);



// add/change CSS properties   


// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "lightgreen";
// title.style.color = "red";
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";



// Events

// const element = document.getElementById("myButton");
// element.onclick = doSomething;

// const element = document.body;
// element.onload = doSomething;

// const element = document.getElementById("textBox");
// element.onchange = doSomething;

// const element = document.getElementById("myDiv");
// element.onmouseleave = doSomething;

// function doSomething(){
    // alert("You did something!");
    // element.style.backgroundColor = "red";
// }



// addEventListener(event, function, useCapture)


/*
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue);

function changeBlue(){
    alert(`you selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}
*/

// innerDiv.addEventListener("mouseover", changeRed)
// innerDiv.addEventListener("mouseout", changeGreen)

// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }
// function changeGreen(){
//     innerDiv.style.backgroundColor = "lightgreen";
// }






// show/hide HTML elements


// const myButton = document.querySelector("#myButton");
// const myImage = document.querySelector("#myImage");

// myButton.addEventListener("click", () => {
//     if(myImage.style.visibility == "hidden"){
//         myImage.style.visibility = "visible";
//     }
//     else{
//         myImage.style.visibility = "hidden";
//     }
// })





// detect key presses

// const myDiv = document.querySelector("#myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event){

//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x + "px";
//             break;
//     }
// }






// Animations



// const myBtn = document.getElementById("myBtn");
// const myAnimation = document.getElementById("myDiv");

// myBtn.addEventListener("click", begin);

// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;    

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             x++;
//             y++;
//             myAnimation.style.left = x + "px";
//             myAnimation.style.top = y + "px";
//         }
//     }
// }

// function begin(){
//     let timerId = null;
//     let degrees = 0;   
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             degrees+=10;
//             x+=1;
//             y+=1;
//             myAnimation.style.left = x + "px";
//             myAnimation.style.top = y + "px";
//             myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }



// function begin(){
//     let timerId = null;
//     let scaleX = 1;   // 1 = 100%
//     let scaleY = 1;

//     timerId = setInterval(frame, );

//     function frame(){
//         if(scaleX >= 3 || scaleY >= 3){
//             clearInterval(timerId);
//         }
//         else{
//             scaleX+=0.01;
//             scaleY+=0.01;
//             myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }






// canvas API = means for drawing graphics
//              used for animations, games, data visualization



// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.strokeStyle = "red";
// context.lineWidth = 5;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

// Draw Triangle
// context.lineWidth = 10;
// context.strokeStyle = "green";
// context.fillStyle = "purple";
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();


// Draw Rectangle
/*
context.fillStyle = "green";
context.fillRect(0, 0, 250, 250 );
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.strokeStyle = "black";
context.fillRect(0, 250, 250, 250 );
context.strokeRect(0,250, 250, 250);

context.fillStyle = "purple";
context.strokeStyle = "black";
context.fillRect(250, 0, 250, 250 );
context.strokeRect(250, 0, 250, 250);

context.fillStyle = "black";
context.strokeStyle = "black";
context.fillRect(250, 250, 250, 250 );
context.strokeRect(250, 250, 250, 250);
*/


// Draw circle
//(x, y, r, sAngle, eAngle, counterclockwise)

// context.fillStyle = "lightblue";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();


// Draw Text
// context.font = "50px MV Boli";
// context.fillStyle = "red";
// context.textAlign = "center";
// context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);




// window = interface used to talk to the web browser
//          the DOM is a property of the window


const myButton = document.getElementById("myButton");

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "http://google.com";

// console.log(window.location.hostname);
// console.log(window.location.pathname);

// myButton.addEventListener("click", () => window.open("http://google.com"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// window.alert("hello!");
// window.confirm("Press OK to continue!");
// let age = window.prompt("Enter your age");
// if(age < 18){
//     window.alert("You must be 18+ to visit this site");
//     window.close();
// }




// cookie = a small text file stored on your computer
//          used to remember information about the user 
//          saved in name=value pair

// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2023 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2023 12:00:00 UTC; path=/";

// console.log(document.cookie);

// setCookie("email", "ggs@gmail.com", 365);

setCookie("firstName", "SpongeBob", 365);
setCookie("lastName", "SquarePants", 365);
console.log(document.cookie);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));
// deleteCookie("firstName");
// deleteCookie("lastName");

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.getElementById("cookieBtn"); 

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});


function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}