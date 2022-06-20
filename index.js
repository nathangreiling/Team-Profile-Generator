const inquirer = require("inquirer");
const fs = require("fs")
const Manager = require("./lib/Manager");
const { validate } = require("@babel/types");


const teamManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name.", 
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log ("The team manager's name is required!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID",
            validate: userInput => {
                if  (userInput) {
                    return true; 
                } else {
                    console.log("The manager's employee ID is required!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the email for the team manager.",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log ("The team manager's email is required!")
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the office number for the team manager.",
            validate: userInput => {
                if  (userInput) {
                    return true; 
                } else {
                    console.log("The team manager's office number is required!")
                    return false;
                }
            }
        },
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const pmanager = new Manager (name, id, email, officeNumber);

         
        console.log(pmanager); 
    })
};

const teamMembers = () => {
    inquirer.prompt([
           
        {
            type: "confirm",
            name: "addEmployees",
            message: "Add more employees to your team?"
        },
    ]).then(function(response) {
        if (response.addEmployees == false) {
            return console.log("Creating your team!");
        } else if (response.addEmployees == true) {
            inquirer.prompt([
                {
                    type: "list",
                    name: "roles",
                    message: "What is the employee's role?",
                    choices: ["Engineer", "Intern"],
                },
                {
                    type: "input",
                    name: "name",
                    message:"Enter the name of the employee",
                    validate: userInput => {
                        if(userInput){
                        return true;
                    }else {
                        console.log("The name of the employee is required!")
                        return false;
                    }
                }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the ID of the employee.",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log("The employee's ID is required!")
                            return false;
                        }
                    }
                },
                {   type: "input",
                    name: "email",
                    message: "Enter the email address for the employee.",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log("The employee's email is required!")
                            return false;
                        }
                        
                    } 

                },
                {
                    type:"input",
                    name:"github",
                    message:"Enter the GitHub username for the engineer.",
                    when: (input) => input.roles === "Engineer",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        }else{
                            console.log("The employee's GitHub is required!")
                            return false;
                        }
                    }
                },
                {   type:"input",
                    name:"schools",
                    message:"Enter the school of the intern.",
                    when: (input) => input.roles === "Intern",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log("The employee's school is required!")
                            return false;
                        }
                    }

                }
            ])
        }
    }).then(function() {
        if (1 === 1) {
            teamMembers();
        } else {
            console.log("Creating your team!");
            return;
        }
    })
}



 teamManager().then(teamMembers);