import inquirer from "inquirer";
let friend_name = "nabeel";
let ask_name = await inquirer.prompt({
  message: "Enter your name:",
  name: "name",
  //   type:"string"
});
switch (ask_name.name) {
  case friend_name:
    if (ask_name.name == friend_name) {
      console.log(`Hello ${friend_name}, Welcome back`);
    }
    break;
  default:
    console.log(`Sorry, You are not my friend.`);
}
