#! /usr/bin/env node
import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter second Number", type: "number", name: "secondnumber" },
    {
      message: "Select One of the operators ",
      type: "list",
      name: "operator",
      choices: ["addition", "subtraction", "multiplication", "devision"],
    },
  ]);
  console.log(answer);
  
  if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
  } else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
  } else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
  } else if (answer.operator === "devision") {
    console.log(answer.firstnumber / answer.secondnumber);
  } else {
    console.log("plese select valid operator");
  }
  