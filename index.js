#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 10000; //Dollar
let mypin = 1125;
console.log(chalk.blackBright.bold.bgYellowBright("\t\tHello !!! How are you? Welcome to MuhammadHasan77 ATM Machine"));
console.log(chalk.cyanBright.bold(`\nYour Balance is ${mybalance}\n`));
let pin_ans = await inquirer.prompt({
    name: "pincode",
    message: "Enter your Pincode",
    type: "number",
});
if (mypin == pin_ans.pincode) {
    console.log(chalk.yellow("Correct Pin\n"));
    let operation_ans = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: chalk.whiteBright.bold("What would you like to do?\n"),
        choices: ["Withdraw", "Deposit", "Fast Cash", "Exit"],
    });
    if (operation_ans.operation == "Withdraw") {
        let withdraw_ans = await inquirer.prompt({
            name: "withdraw",
            message: chalk.whiteBright("How much would you like to withdraw in your account?"),
            type: "number",
        });
        if (withdraw_ans.withdraw > mybalance) {
            console.log(chalk.redBright.bold("Insufficient Balance"));
        }
        else {
            mybalance = mybalance - withdraw_ans.withdraw;
            console.log(chalk.green.bold(`Your Remaining Balance is ${mybalance}`));
        }
    }
    else if (operation_ans.operation == "Deposit") {
        let deposit_ans = await inquirer.prompt({
            name: "deposit",
            message: chalk.whiteBright("How much would you like to deposit in your account?"),
            type: "number",
        });
        mybalance = mybalance + deposit_ans.deposit;
        console.log(chalk.green.bold(`Your Remaining Balance is ${mybalance}`));
    }
    else if (operation_ans.operation == "Fast Cash") {
        let fastcash_ans = await inquirer.prompt({
            name: "fastcash",
            message: "How much would you like to withdraw in your account?",
            type: "list",
            choices: ["500", "1000", "2000", "5000"],
        });
        mybalance = mybalance - fastcash_ans.fastcash;
        console.log(chalk.green(`Your Remaining Balance is ${mybalance}`));
    }
    else if (operation_ans.operation == "Exit") {
        console.log(chalk.yellow("Thank you for using my ATM Machine"));
    }
}
else {
    console.log(chalk.redBright.bold("Alert!Incorrect Pin"));
}
