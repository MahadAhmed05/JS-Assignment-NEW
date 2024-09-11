// CHAPTER 1
// ALERTS

//1)
// alert("Hello")

//2)
// alert("Error! Please enter a valid password.")

//3)
// alert("Welcome to JS Land... \nHappy Coding!")

//4)
// alert("Welcome to JS Land...")
// alert("Happy Coding!")

//5)
// console.log("Hello... I can run JS through my web browser console");

// CHAPTER 2
// VARIABLES FOR STRING

//1)
// var username;

//2)
// var myName = "Muhammad Mahad Ahmed";

//3)
// var message;
// message = "Hello World";
// alert(message)

// 4)
// var studentName = "Jhone Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

//5)
// var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n p";
// alert(pizza)

//6)
// var email = "Example@gmail.com"
// alert("My Email address is" + " " + email)

//7)
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book" + " " + book);

//8)
// var para = document.getElementById("para")
// para.innerHTML = "Yah! I can write HTML content through JavaScript"

//9)
// var design = "\"------------------------♛♜♛------------------------\"";
// alert(design)

// CHAPTER 3
// VARIABLES FOR NUMBERS

// 1)
// var age = 19;
// alert("i am" + age + "years old");

// 2)
// var visited = 14;
// alert(`You have visited this website ${visited} times`);
// alert("You have visited this website" +visited+ "times");

// 3)
// var birthYear = 2005
// var para = document.getElementById("para")
// para.innerHTML = `My Birth Year is ${birthYear} <br> Data type of my declared variable is ${typeof birthYear}`

// 4)
// var visitorName = "John Doe"
// var productTitle = "T-shirts(s)"
// var quantity = 5
// console.log(`${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing Store`);

// CHAPTER 4
// VARIABLE NAMES: LEGAL & ILLEGAL

//1)
// var name1 = "Mahad", name2 = "Ali", name3 = "Ahmed";

//2)
// Legal
// var name = "Mahad";
// var name123 = "Mahad";
// var $name = "Mahad";
// var _name = "Mahad";
// var name_last = "Mahad";

// Illegal
// var last name = "mahad";
// var 123name = "mahad";
// var name& = "mahad";
// var first-name = "mahad";
// var 22name = "mahad";

//3)
//a)
// console.log("Rules for naming JS variables");
// //b
// console.log("Variable names can only contain alphabets, numbers, $ and _. For example $my_1stVariable");
// // c
// console.log("Variable must begin with a letter, $ or _. For example $name, _name or name");
// //d
// console.log("Variables names are case sensitive");
// //e
// console.log("Variables names should not be JS keywords");

// CHAPTER 5
// MATH EXPRESSIONS

//1)
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// console.log(sum);

//2)
// Subtraction
// var num1 = 3;
// var num2 = 5;
// var sum = num1 - num2;
// console.log(sum);

// Multiplication
// var num1 = 3;
// var num2 = 5;
// var sum = num1 * num2;
// console.log(sum);

// Division
// var num1 = 20;
// var num2 = 5;
// var sum = num1 / num2;
// console.log(sum);

// Modulus
// var num1 = 20;
// var num2 = 5;
// var sum = num1 % num2;
// console.log(sum);

//3)
//a)
// var num1;
// console.log("Value after variable declaration is :", num1);
// num1 = 5;
// console.log("Initial Value :", num1);
// ++num1;
// console.log("Value after increament is:", num1);
// num1 = num1 + 7;
// console.log("Value after addition is:", num1);
// --num1;
// console.log("Value after decrement is :", num1);
// num1 = num1 % 3;
// console.log("The remainder is :", num1);

//4)
// var movieTcket = 600
// var totalPrice = movieTcket * 5
// console.log("Total cost to buy 5 tickets to a movie is",totalPrice);

//5)
// console.log("Table of 4");
// console.log("4 x 1 =",4*1);
// console.log("4 x 2 =",4*2);
// console.log("4 x 3 =",4*3);
// console.log("4 x 4 =",4*4);
// console.log("4 x 5 =",4*5);
// console.log("4 x 6 =",4*6);
// console.log("4 x 7 =",4*7);
// console.log("4 x 8 =",4*8);
// console.log("4 x 9 =",4*9);
// console.log("4 x 10 =",4*10);

//6)
// var celsiusTemp = 25;
// var CtoF = (celsiusTemp * 9) / 5 + 32;
// console.log(`${celsiusTemp}C is ${CtoF}F`);

// var fahrenheitTemp = 70;
// var FtoC = ((fahrenheitTemp - 32) * 5) / 9;
// console.log(`${fahrenheitTemp}F is ${FtoC}C`);

// //7
// var itemOnePrice = 650;
// var itemTwoPrice = 100;
// var itemOneQuantity = 3;
// var itemTwoQuantity = 7;
// var shippingCharges = 100;
// var para = document.getElementById("para");
// para.innerHTML = `Price of Item 1 is ${itemOnePrice} <br> Quantity of Item 1 is ${itemOneQuantity} <br> Price of Item 2 is ${itemTwoPrice} <br> Quantity of Item 2 is ${itemTwoQuantity} <br> Shipping Charges is ${shippingCharges} <br> Total cost of your order is ${
//   itemOnePrice * itemOneQuantity +
//   itemTwoPrice * itemTwoQuantity +
//   shippingCharges
// } `;

//8
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;
// console.log(percentage);

// CHAPTER 6
// MATH EXPRESSIONS

//1)
// var a = prompt("Enter A Number");
// console.log("RESULT \nThe value of a is :", a);
// ++a;
// console.log("The value of ++a is :", a);
// console.log("Now the value of a is :", a);
// console.log("The value of a++ is :", a);
// a++;
// console.log("Now the value of of a is:", a);
// --a;
// console.log("The value of --a is:", a);
// console.log("Now the value of a is :", a);
// console.log("the value of a-- is:", a);
// a--;
// console.log("Now the value of a is :", a);

//2)
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);

//3)
// var greeting = prompt("Write Greeting")
// console.log(greeting);

//5)
// var num = parseInt(prompt("Enter A Number"));
// if (num) {
//   console.log("Table of", num);
//   console.log(`${num} x 1 = ${num * 1}`);
//   console.log(`${num} x 2 = ${num * 2}`);
//   console.log(`${num} x 3 = ${num * 3}`);
//   console.log(`${num} x 4 = ${num * 4}`);
//   console.log(`${num} x 5 = ${num * 5}`);
//   console.log(`${num} x 6 = ${num * 6}`);
//   console.log(`${num} x 7 = ${num * 7}`);
//   console.log(`${num} x 8 = ${num * 8}`);
//   console.log(`${num} x 9 = ${num * 9}`);
//   console.log(`${num} x 10 = ${num * 10} `);
// } else {
//   console.log("Table of 5");
//   console.log("5 x 1 =", 5 * 1);
//   console.log("5 x 2 =", 5 * 2);
//   console.log("5 x 3 =", 5 * 3);
//   console.log("5 x 5 =", 5 * 4);
//   console.log("5 x 5 =", 5 * 5);
//   console.log("5 x 6 =", 5 * 6);
//   console.log("5 x 7 =", 5 * 7);
//   console.log("5 x 8 =", 5 * 8);
//   console.log("5 x 9 =", 5 * 9);
//   console.log("5 x 10 =", 5 * 10);
// }

// CHAPTER 9-11
// 1)
// var cityName = prompt("Enter your CITY Name");
// if (cityName == "Karachi") {
//   console.log("Welcome to City of Lights");
// } else {
//   console.log(`Welcome to ${cityName}`);
// }

// 2)
// var gender = prompt("Enter your Gender");
// if (gender == "male") {
//   console.log("Good Morning Sir");
// } else if (gender == "female") {
//   console.log("Good Morning Ma'am");
// } else {
//   console.log("Please enter correct gender");
// }

// 3)
// var trafficSignal = prompt("Enter Traffic Signal");
// if (trafficSignal == "red") {
//   console.log("Must Stop");
// } else if (trafficSignal == "yellow") {
//   console.log("Ready to Move");
// } else if (trafficSignal == "green") {
//   console.log("Move Now");
// } else {
//   console.log("Enter Correct Traffic SIgnal");
// }

// 4)
// var remainingFuel = prompt("Enter Remaining Fuel in Liter");
// if (remainingFuel < 0.25) {
//   console.log("Please refill the fuel in your Car");
// } else {
//   console.log("Your car has enough fuel");
// }

// 5)
// a
// var a = 4;
// if (++a == 5) {
//   alert("given condition for variable a is true");
// }

// b
// var b = 82;
// if (b++ === 83) {
//   alert("Given condition for variable b is true");
// }

// c
// var c = 12;

// if (c++ === 13) {
//   alert("condition 1 is tue");
// }

// if (c === 13) {
//   alert("condition 2 is true");
// }

// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// d
// var materialCost = 20000;
// var laborCost = 2000;

// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// f
// if ("car" < "cat") {
//   console.log("car is smaller than cat");
// }

// 6)
// var totalMarks = prompt("Enter Total Marks");
// var obtainedMarks = prompt("Eter your Marks");
// var percentage = (obtainedMarks / totalMarks) * 100;
// if (percentage >= 80) {
//   console.log("Grade : A-one");
//   console.log("Remarks : Excellent");
// } else if (percentage >= 70) {
//   console.log("Grade : A");
//   console.log("Remarks : Good");
// } else if (percentage >= 60) {
//   console.log("Grade : B");
//   console.log("Remarks : You need to improve");
// } else {
//   console.log("Grade : Fail");
//   console.log("Remarks : Sorry");
// }

// 7)
// var secretNumber = 6;
// var guessNumber = Number(prompt("Enter a Number"));
// if (secretNumber === guessNumber) {
//   console.log("Bingo! Correct Answer");
// } else if (secretNumber === guessNumber + 1) {
//   console.log("Close enough to the correct answer ");
// } else {
//   console.log("Try another number");
// }

// 8)
// var num = Number(prompt("Enter A Number"));
// if (num % 3 === 0) {
//   console.log("Number is Divisible by 3");
// } else {
//   console.log("Number is Not Divisible by 3");
// }

// 9)
// var num = Number(prompt("Enter A Number"));
// if (num % 2 === 0) {
//   console.log("Your Number is Even");
// } else {
//   console.log("Your Number is Odd");
// }

// 10)
// var temp = Number(prompt("Enter Your Temperature"));
// if (temp > 40) {
//   console.log("It is too hot outside");
// } else if (temp > 30) {
//   console.log("The Weather today is Normal");
// } else if (temp > 20) {
//   console.log("Today's Weather is cool");
// } else if (temp > 10) {
//   console.log("OMG! Today's Wweather is so Cool");
// } else {
//   console.log("Your temperature is not correct");
// }

// 11)
// var num1 = Number(prompt("Enter You First Number"));
// var num2 = Number(prompt("Enter You Second Number"));
// var operator = prompt("Enter You Operation you want to perform");
// if ((operator === "+")) {
//   console.log(num1 + num2);
// } else if ((operator === "-")) {
//   console.log(num1 - num2);
// } else if ((operator === "*")) {
//   console.log(num1 * num2);
// } else if ((operator === "/")) {
//   console.log(num1 / num2);
// }
