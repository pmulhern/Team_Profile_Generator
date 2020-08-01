const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");

// Set empty team array
let team = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//Manager specific questions
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
];
//Engineer specific questions
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
];
//Intern specific questions
let internQues = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internID"
    },
    {
        type: "input",
        message: "What is your intern's email address?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's school's name?",
        name: "internSchool"
    },
];
// Inquirer prompts
// Manager function/ prompt 
function manager() {
    inquirer
        .prompt(
            managerQues,
        )
            .then(response => {
                let manager = new Manager (response.managerName,response.managerID,response.managerEmail,response.officeNumber)
            team.push(manager)
            console.log(team)
            addTeamMembers() 
        })} 
// Engineer function/ prompt 
    function engineer() {
        inquirer
            .prompt(     
                engineerQues,
            )
                .then(response => {
                    let engineer = new Engineer (response.engineerName,response.engineerID,response.engineerEmail,response.gitUser)
                team.push(engineer)
                console.log(team)
                addTeamMembers() 
            })}
// Intern function/ prompt 
    function intern() {
        inquirer
            .prompt(     
                internQues,
            )
                .then(response => {
                let intern = new Intern(response.internName,response.internID,response.internEmail,response.internSchool)
                team.push(intern)
                console.log(team)
                addTeamMembers()
            })}
// Intermediary function which allows the user to decide next steps i.e. add engineer, intern or complete
    function addTeamMembers() {
        inquirer.prompt([
            {
            type: "list",
            message: "Would you like to add another team member?",
            name: "teamMember",
            choices: [
                        "Engineer",
                        "Intern",
                        "No more team members to add"
                    ]
            }])
            // Switch function which calls either engineer() or intern() functions or finalized html
            .then(response => {
                switch (response.teamMember) {
                    case "Engineer":
                        engineer();
                        break;
                    case "Intern":
                        intern();
                        break;
                    case "No more team members to add":
                        let html = render(team) 
                        
                        function writeHTML() {
                            fs.writeFile(outputPath, html, function(err) {
                                if (err) {
                                    return console.log(err);
                        }})}
                        writeHTML();

                }
            });
    }
// Initialize manager function which kicks off application  
manager();
