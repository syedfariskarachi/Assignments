// Assignmento3
// Calculator project using function:
let num1 = 3;
let num2 = 5;
let operater = ["+", "-", "/", "*"];
function calcu(num1, num2, operater) {
    if (operater == "+") {
        console.log(num1 + num2);
    }
    else if (operater == "-") {
        console.log(num1 - num2);
    }
    else if (operater == "/") {
        console.log(num1 / num2);
    }
    else if (operater == "*") {
        console.log(num1 * num2);
    }
    else {
        console.log("Write your operater in string");
    }
}
calcu(2, 9, "*");
calcu(3, 4, "+");
calcu(3, 4, "*");
calcu(3, 4, "/");
export {};
// console.log(operation1)
