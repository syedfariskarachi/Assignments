// Assignment 02
// Evaluating a number game
import inquirer from "inquirer";
let dynamic_num = 7;
let user_input = await inquirer.prompt({
    message: "Enter your number :",
    // type: "number",
    name: "user_input_num",
});
if (user_input.user_input_num === dynamic_num) {
    let result = `${user_input.user_input_num} is equal to the Dynamic Number(${dynamic_num})`;
    console.log(result);
}
else if (user_input.user_input_num > dynamic_num) {
    let result = `${user_input.user_input_num} is greater then the Dynamic Number(${dynamic_num})`;
    console.log(result);
}
else if (user_input.user_input_num < dynamic_num) {
    let result = `${user_input.user_input_num} is less then the Dynamic Number(${dynamic_num})`;
    console.log(result);
}
console.log(user_input);
