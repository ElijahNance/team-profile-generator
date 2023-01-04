const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const engineerRole = "Engineer";
const internRole = "Intern";

// create the team
async function generateTeamMembers(team) {
    await getManagerInfo(team);
    await getOtherTeamMembers(team);
};


// export function to generate entire page
async function doHTML() {

    const team = [];
    
    
    await generateTeamMembers(team);
    


    // Generate HTML markup
    const pageMarkup=generateHTML(team);

    // Write markup to file
    try {
            fs.writeFileSync('team.html', pageMarkup);
            console.log("Success!")
        } catch (err) {
            console.log(err);
        }
    
}

function generateHTML(team) {
    const headerMarkup = `<!-- Instructor provided template -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ENTER PAGE TITLE HERE</title>
      <!-- Minified version -->
      <style>
        @import "https://cdn.simplecss.org/simple.min.css";
    
        main {
          display: grid;
          grid-column: 1/-1;
          justify-items: center;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          max-width: 1140px;
          margin: auto;
        }
    
        @media screen and (max-width: 1140px) {
          main {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width: 720px) {
          main {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>`;

    const managerMarkup =
    //Used index position 0 since the Manager prompts always come first
     `
        <article>
          <h2>${team[0].getRole()} ${team[0].name}</h2>
          <ul>
            <li>ID:${team[0].id}</li>
            <li>Email: <a href = "mailto:${team[0].email}">${team[0].email}</a></li>
            <li>Office Number: ${team[0].officeNumber}</li>
          </ul>
        </article>
    `;

    const teamMarkup = (team)=> {
        let workString = "";
        // Loop gathering all the prompt data and placing it in HTML format
        for(let i=1; i < team.length; i++) {
            workString += `<article>`;
            workString += `<h2>${team[i].getRole()} ${team[i].name}</h2>`;
            workString += `<ul>`;
            workString += `<li>ID:${team[i].id}</li>`;
            workString += `<li>Email: <a href = "mailto:${team[i].email}">${team[i].email}</a></li>`;
            workString += `</ul>`;
            // If statement determing the role so the page knows whether to display GitHub or School
            if(team[i].getRole()===engineerRole) {
                workString += `<li>GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></li>`;
            } else if(team[i].getRole()===internRole) {
                workString += `<li>School: ${team[i].school}</li>`;
            } else {
                workString += `<li>Unknown Type</li>`;
            };

            workString += `</article>`;
        };

        return workString;
    };

    const footerMarkup = `</main>
    <footer>
      &copy; 2022-2023
    </footer>
  </body>
  </html>
  `;

    return headerMarkup + managerMarkup + teamMarkup(team) + footerMarkup;
}

async function getManagerInfo(team) {
    //This function is just to get the manager - have this separate because don't need to loop manager
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

async function getOtherTeamMembers(team) {
    //This function is to get the rest of the team (engineers and interns) - have this separate because need to loop

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
        // Push's data into empty array so it can later be looped through for data
        team.push(employee);
        // Allows the loop to either run again or finish depending on user input
        if (addEmployee) {
            return getOtherTeamMembers(team);
        } else {
            return team;
        }
    })
};

exports.doHTML = doHTML;