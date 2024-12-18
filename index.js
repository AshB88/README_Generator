// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information and examples for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: [
            'MIT',
            'GPLv3',
            'Apache 2.0',
            'BSD 3-Clause',
            'None'
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Your README file has been generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('README.md', generateMarkdown(answers)));
    
}

// Function call to initialize app
init();
