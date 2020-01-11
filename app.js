const inquirer = require("inquirer");

function userInput() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter employee name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email",
        },
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])
}

userInput();  