
// let age = 55;
// if(age  < 13){
//     console.log("you are child");
// }
// else if(age > 13 && age < 19){
//     console.log("you are teenager");
// }
// else if(age > 20 && age < 59){
//     console.log("you are adult");
// }
// else{
//     console.log("old age")
// }


// let personAge = 20;
// let isWednesday = true;
// let ticketPrice = (personAge >= 18) ? 12 : 8;

// if (isWednesday) {
//     ticketPrice -= 2;
// }
// console.log(`Ticket price: $${ticketPrice}`);


// let species = "Dog";
// let petAge = 1.5;

// if (species.toLowerCase() === "dog") {
//     if (petAge < 2) {
//         console.log("Recommendation: Puppy food");
//     } else {
//         console.log("Recommendation: Adult dog food");
//     }
// } else if (species.toLowerCase() === "cat") {
//     if (petAge > 5) {
//         console.log("Recommendation: Senior cat food");
//     } else {
//         console.log("Recommendation: Adult cat food");
//     }
// } else {
//     console.log("Recommendation: Generic pet food");
// }


// let password = "mySecurePassword123!";
// let strength;

// if (password.length < 6) {
//     strength = "weak";
// } else if (password.length >= 6 && password.length <= 10) {
//     strength = "medium";
// } else {
//     strength = "strong";
// }
// console.log(`Password strength: ${strength}`);

const prompt = require("prompt-sync")();
let month = Number(prompt("Enter the month number: "));
switch  (month){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("june")
        break;
    case 7:
        console.log("july")
        break;
    case 8:
        console.log("august")
        break;
    case 9:
        console.log("september")
        break;
    case 10:
        console.log("october")
        break;
    case 11:
        console.log("november")
        break;
    case 12:
        console.log("december")
        break;
    default:
        console.log("invalid month number")
}

// 2. Basic Calculator
console.log("\n--- 2. Basic Calculator ---");
let num1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = Number(prompt("Enter second number: "));

switch (operator) {
    case '+':
        console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if (num2 === 0) {
            console.log("Result: Cannot divide by zero!");
        } else {
            console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
    default:
        console.log("Invalid operator");
}

// 3. Traffic Light System
console.log("\n--- 3. Traffic Light System ---");
let color = prompt("Enter a traffic light color (red, yellow, green): ").toLowerCase();

switch (color) {
    case 'red':
        console.log("Stop");
        break;
    case 'yellow':
        console.log("Get Ready");
        break;
    case 'green':
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}
