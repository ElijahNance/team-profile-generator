// const fs = require('fs');
// module.exports = {
//     writeToFile: (team) => {
//         try {
//             fs.writeFileSync('team.html', team);
//             console.log("Success!")
//         } catch (err) {
//             console.log(err);
//         }
//     },
//     generateHTML: (managerData, employeeData) => {
//         return `<!-- Instructor provided template -->
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta http-equiv="X-UA-Compatible" content="IE=edge">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>ENTER PAGE TITLE HERE</title>
//           <!-- Minified version -->
//           <style>
//             @import "https://cdn.simplecss.org/simple.min.css";
        
//             main {
//               display: grid;
//               grid-column: 1/-1;
//               justify-items: center;
//               grid-template-columns: 1fr 1fr 1fr;
//               gap: 1rem;
//               max-width: 1140px;
//               margin: auto;
//             }
        
//             @media screen and (max-width: 1140px) {
//               main {
//                 grid-template-columns: 1fr 1fr;
//               }
//             }
//             @media screen and (max-width: 720px) {
//               main {
//                 grid-template-columns: 1fr;
//               }
//             }
//           </style>
//         </head>
//         <body>
//           <header>
//             <h1>My Team</h1>
//           </header>
//           <main>
//             <article>
//               <h2>${managerData.name}</h2>
//               <ul>
//                 <li>${managerData.id}</li>
//                 <li>Email: ${managerData.email}</li>
//                 <li>Office Number: ${managerData.officeNumber}</li>
//               </ul>
//             </article>
//             <article>
//               <h2>${Engineer.name}</h2>
//               <ul>
//                 <li>${Engineer.id}</li>
//                 <li>Email: ${Engineer.email}</li>
//                 <li>GitHub: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></li>
//               </ul>
//             </article>
//             <article>
//               <h2>${Intern.name}</h2>
//               <ul>
//                 <li>${Intern.id}</li>
//                 <li>Email: ${Intern.email}</li>
//                 <li>School: ${Intern.school}</li>
//               </ul>
//             </article>
//           </main>
//           <footer>
//             &copy; 2022-2023
//           </footer>
//         </body>
//         </html>
//         `
//     }
// }
