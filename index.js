const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
    type: 'checkbox',
    name: 'title',
    message: 'What is your job title?',
    choices: [
        'Manager', 'Engineer', 'Intern',
    ],
      },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your office number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ]);
};

const addUser = () => {
    return inquirer.prompt([
    {
        type: 'checkbox',
        name: 'addUser',
        message: 'Would you like to add a team member?',
        choices: [
            'Yes', 'No',
        ],
            },
      {
      type: 'checkbox',
      name: 'title1',
      message: 'What is your job title?',
      choices: [
          'Engineer', 'Intern',
      ],
        },
      {
        type: 'input',
        name: 'name1',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'email1',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'github1',
        message: 'Enter your GitHub Username',
      },
    ]);
  };

const generateHTML = ({title, name, location, github, email}) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Meet the Team</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container col-4">
      <h1 class="display-4">My Team</h1>
      <div class="card col">
          <h3>${name}</h3>
          <p><span class="badge badge-secondary">${title}</span></p>
          <ul class="list-group">
          <li class="list-group-item">ID: ${name}</li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
          <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
          <li class="list-group-item">Office Number: ${location}</li>
          </ul>
      </div>
    </div>
    </div>  
  </body> 
  </html>`;

  const appendHTML = ({title1, name1, github1, email1 }) =>
  ` <div class="container col-4">   
        <div class="card col">
            <h3>${name1}</h3>
            <p><span class="badge badge-secondary">${title1}</span></p>
            <ul class="list-group">
            <li class="list-group-item">ID: ${name1}</li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${github1}">${github1}</a></li>
            <li class="list-group-item">Email: <a href = "mailto: ${email1}">${email1}</a></li>
            </ul>
      </div>
    </div>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully created index.html'))
    .then(() => addUser())
    .then((answers) => fs.appendFileSync('index.html', appendHTML(answers)))
    .then(() => console.log('Successfully appended to index.html'))
    .catch((err) => console.error(err));
};

init();

