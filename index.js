const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'What technologies did you use?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub user name.',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter your GitHub repo name for this project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license used.',
        choices:[
            "Apache",
            "IBM",
            "MIT",
        ]
      },
  ]);

// function to write README file
function writeToFile() {
    fs.writeFile('README.md', util(data), (err) => {
    if (err) {
        console.log(err);
    }
    })};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile(data)
    });
};

// function call to initialize program
init();
