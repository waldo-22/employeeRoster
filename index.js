const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
let employeeRoster = []; 
// // Use writeFileSync method to use promises instead of a callback function

inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the Managers name?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is the Managers email?',
    },
    // {
    //   type: 'input',
    //   name: 'hobby',
    //   message: 'What is your favorite hobby?',
    // },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
])
.then((response) => {
    let manager = new Manager (response.managerName, response.id, response.managerEmail, response.officeNumber)
    employeeRoster.push(manager)

    let content = `
    <!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Roster</title>
    <link rel = "stylesheet" href= "dist/styles.css">
</head>
<body>
    <section class ="header">
        <h1> My Employee Roster</h1>
    </section>
    <section class ="BigFlexbox">
        <section class = "Row1">
            <section class = "card" id = "1stCard">
                <div class = "cardHeader">
                    <p class = "1stCardName">${response.managerName}</p>
                </div>
                <div class = "1stCardContent">
                    <div class = "1stCardTextbox">
                        <p class = "1stCardID">ID: 1st Card</p>
                    </div>
                    <div class = "1stCardTextbox">
                    <p>Email:<a href="mailto:${response.managerEmail}">${response.managerEmail}</a></p>
                    </div>
                    <div class = "1stCardTextbox">
                    <p>GitHub:<a href="https://github.com/${response.firstEngineerGithub}">${response.firstEngineerGithub}</a></p>

                    </div>
                </div>
            </section>
            <section class = "card" id = "2ndCard">
                <div class = "cardHeader">
                    <p class = "2ndCardName">Ronnie</p>
                </div>
                <div class = "2ndCardContent">
                    <div class = "2ndCardTextbox">
                        <p class = "2ndCardID">ID: 2nd Card</p>
                    </div>
                    <div class = "2ndCardTextbox">
                        <p class = "2ndCardEmail">Email: fakeEmail@gmail.com</p>
                    </div>
                    <div class = "2ndCardTextbox">
                        <p class = "2ndCardGitHub">GitHub Link: *github link here*</p>
                    </div>
                </div>
            </section>
            <section class = "card" id = "3rdCard">
            <div class = "cardHeader">
                    <p class = "3rdCardName">Reniel</p>
                </div>
                <div class = "3rdCardContent">
                    <div class = "3rdCardTextbox">
                        <p class = "3rdCardID">ID: 3rd Card</p>
                    </div>
                    <div class = "3rdCardTextbox">
                        <p class = "3rdCardEmail">Email: fakeEmail@gmail.com</p>
                    </div>
                    <div class = "3rdCardTextbox">
                        <p class = "3rdCardGitHub">GitHub Link: *github link here*</p>
                    </div>
                    </div>
                    </section>
        </section>
        <section class = "Row2">
            <section class = "card" id = "4thCard">
                <div class = "cardHeader">
                    <p class = "4thCardName">Ricky</p>
                    </div>
                    <div class = "4thCardContent">
                    <div class = "4thCardTextbox">
                    <p class = "4thCardID">ID: 4th Card</p>
                    </div>
                    <div class = "4thCardTextbox">
                    <p class = "4thCardEmail">Email: fakeEmail@gmail.com</p>
                    </div>
                    <div class = "4thCardTextbox">
                    <p class = "4thCardGitHub">GitHub Link: *github link here*</p>
                    </div>
                </div>
            </section>
            <section class = "card" id = "5thCard">
                <div class = "cardHeader">
                    <p class = "5thCardName">O'Niel</p>
                </div>
                <div class = "5thCardContent">
                <div class = "5thCardTextbox">
                        <p class = "5thCardID">ID: 5th Card</p>
                        </div>
                    <div class = "5thCardTextbox">
                        <p class = "5thCardEmail">Email: fakeEmail@gmail.com</p>
                    </div>
                    <div class = "5thCardTextbox">
                    <p class = "5thCardGitHub">GitHub Link: *github link here*</p>
                    </div>
                    </div>
            </section>

            </section>
            </section>
</body>
</html>`;
fs.writeFile('index.html', content, (error) => console.error(error))

})



// // Bonus using writeFileSync as a promise
// const init = () => {
    // promptUser()
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();