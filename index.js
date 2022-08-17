const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
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

const generateHTML = ({ name, location, github, email }) =>
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
          <h3>${name}<span class="badge badge-secondary">Contact Me</span></h3>
          <ul class="list-group">
          <li class="list-group-item">ID: ${name}</li>
          <li class="list-group-item">GitHub: ${github}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Office Number: ${location}</li>
          </ul>
    </div>
    <div class="card col">
        <h3>${name}<span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">ID: ${name}</li>
        <li class="list-group-item">GitHub: <a href="https://github.com/" + ${github}></a>${github}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${location}</li>
        </ul>
    </div>
    <div class="card col">
        <h3>${name}<span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">ID: ${name}</li>
        <li class="list-group-item">GitHub: ${github}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${location}</li>
        </ul>
    </div>
    </div>
    </div>  
  </body>
  </html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
