const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
// const prompt = inquirer.createPromptModule();

// create the team
const generateTeamMembers = async (team) => {
    
    // console.log("generateTeamMembers Starting ...");
    await getManagerInfo(team)
        .then(getOtherTeamMembers(team))
    // console.log("generateTeamMembers Done ...");

};


// export function to generate entire page
exports.doHTML = function (team) {
    // console.log("doHTML Starting ...");
    generateTeamMembers(team);
    
    // console.log("doHTML Done");

    //HTML TEMPLATE goes here
}

//const getManagerInfo = (team) => {
//function getManagerInfo(team) {
exports.getManagerInfo = function (team) {
    //This function is just to get the manager - have this separate because don't need to loop manager
    // console.log("getManagerInfo ...");
    return inquirer.prompt ([
        {
            message: "Enter manager's name",
            name: 'name'
        },
        {
            message: "Enter manager's ID",
            name: 'id'
        },
        {
            message: "Enter manager's email",
            name: 'email'
        },
        {
            message: "Enter manager's office number",
            name: 'officeNumber'
        }
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        team.push(manager);
        console.log(manager);
    })
}

//const getOtherTeamMembers = (team) =>{ 
    
//function getOtherTeamMembers(team) {

exports.getOtherTeamMembers= function (team) {
    //This function is to get the rest of the team (engineers and interns) - have this separate because need to loop
    // console.log("getOTherTeamMembers ...");

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Add a team member',
            choices: ['Engineer', 'Intern']
        },
        {
            message: 'Enter Employee name',
            name: 'name',
        },
        {
            message: "Enter Employee Id",
            name: 'id',
        },
        {
            message: "Enter Employee email",
            name: 'email',
        },
        {
            message: "Enter Engineer GitHub",
            name: 'github',
            when: (answers) => {
                if (answers.role === 'Engineer') {
                    return true;
                }
            }
        },
        {
            message: "Enter Intern School",
            name: 'school',
            when: (answers) => {
                if (answers.role === 'Intern') {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            message: "Would you like to add another employee?",
            name: 'addEmployee'
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, addEmployee } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        team.push(employee);

        if (addEmployee) {
            return getOtherTeamMembers(team);
        } else {
            return team;
        }
    })
};

