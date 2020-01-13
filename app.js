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

    .then(function( {name, id, email, role}) {
        switch (role) {
            case "Engineer":
                inquirer.prompt(
                    {
                        tpye: "input",
                        name: "github",
                        message: "Enter Github username",
                    }
                ).then(function( {github}) {
                    generateEngineer(name, id, email, github)
                    addTeam()
                } )
        }
    })
}

function addEmployee() {
    inquirer.prompt({
            type: "confirm",
            name: "add another employee",
            message: "Add another team members?",
        }).then(
            function({ addEmployee }) {
                console.log(addEmployee)
                if (addEmployee) {
                    askQuestions()
                } else {
                    renderHTML()
                }
            }
        )
        .catch(err => {
            console.log("Error adding other members", err)
            throw err
        })
}

userInput();  