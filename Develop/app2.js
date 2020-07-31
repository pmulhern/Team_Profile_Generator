const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let managerQues =
[
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is your manager's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices: [
            "Engineer",
            "Intern",
            "No more team members to add"
        ]
    }
];

let engineerQues = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is your engineer's email address?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub User Name?",
        name: "gitUser"
    },
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "teamMember",
        choices: [
            "Engineer",
            "Intern",
            "No more team members to add"
        ]
    }
];

let internQues = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is your intern's email address?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's school's name?",
        name: "gitUser"
    },
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "teamMember",
        choices: [
            "Engineer",
            "Intern",
            "No more team members to add"
        ]
    }
];

// function selectRole() {
//     if (response.teamMember === "Engineer") {
//         inquirer.prompt(engineerQues);
//     } else if (response.teamMember === "Intern") {
//         inquirer.prompt(internQues);
//     }
//     else {
//         return;
//     }
// }

// Inquirer prompts
function manager() {
    inquirer
        .prompt(
            managerQues,       

        )
            .then(function(response) {
            // let managerName = response.managerName
            // let managerID = response.managerID
            // let managerEmail = response.managerEmail
            // let managerOffice = response.officeNumber
            // let selection = response.teamMember
            // console.log(managerName)
            // console.log(managerID)
            // console.log(managerEmail)
            // console.log(managerOffice)
            // console.log(selection)
            // console.log(response)
            team.push(response)
            console.log(team)

            
            if (response.teamMember==="Engineer") {
                engineer();
            } else if (response.teamMember==="Intern") {
                intern();
                }
                    else return;
            
        })
    }

    function engineer() {
        inquirer
            .prompt(     
                engineerQues,
                // internQues,
            )
                .then(function(response) {
                // let managerName = response.managerName
                // let managerID = response.managerID
                // let managerEmail = response.managerEmail
                // let managerOffice = response.officeNumber
                // let selection = response.teamMember
                // console.log(managerName)
                // console.log(managerID)
                // console.log(managerEmail)
                // console.log(managerOffice)
                // console.log(selection)
                // console.log(response)
                team.push(response)
                console.log(team)

                if (response.teamMember==="Engineer") {
                    engineer();
                } else if (response.teamMember==="Intern") {
                    intern();
                    }
                        else return;

                
            })
        }

    function intern() {
        inquirer
            .prompt(     
                internQues,
            )
                .then(function(response) {
                // let managerName = response.managerName
                // let managerID = response.managerID
                // let managerEmail = response.managerEmail
                // let managerOffice = response.officeNumber
                // let selection = response.teamMember
                // console.log(managerName)
                // console.log(managerID)
                // console.log(managerEmail)
                // console.log(managerOffice)
                // console.log(selection)
                // console.log(response)
                team.push(response)
                console.log(team)

                if (response.teamMember==="Engineer") {
                    engineer();
                } else if (response.teamMember==="Intern") {
                    intern();
                    }
                        else return;

            })
        }

    manager();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
