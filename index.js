const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user.
const promptUser = () => {
    return inquirer.prompt([
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
    ])};
    
// Function to wirte data to README file.
const writeFileAsync = util.promisify(fs.writeFile);

// Function to call prompt then send data from prompt to the generateMarkdown function and write 
// the output from generateMarkdown to a new README file.
const init = async () => {
    try {
        const data = await promptUser();
        const file = generateMarkdown(data);
        await writeFileAsync('README.md', file);
    }
    catch (err) {
        console.log(err);
    }
};

// Function call to initialize program.
init();
