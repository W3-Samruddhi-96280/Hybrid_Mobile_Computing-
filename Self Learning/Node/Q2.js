// app.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function (num1) {
    rl.question("Enter second number: ", function (num2) {
        rl.question("Enter operation (+, -, *, /): ", function (operator) {

            let a = parseFloat(num1);
            let b = parseFloat(num2);
            let result;

            switch (operator) {
                case "+":
                    result = a + b;
                    console.log("Addition: " + result);
                    break;

                case "-":
                    result = a - b;
                    console.log("Subtraction: " + result);
                    break;

                case "*":
                    result = a * b;
                    console.log("Multiplication: " + result);
                    break;

                case "/":
                    if (b === 0) {
                        console.log("Cannot divide by zero");
                    } else {
                        result = a / b;
                        console.log("Division: " + result);
                    }
                    break;

                default:
                    console.log("Invalid operator");
            }

            rl.close();
        });
    });
});