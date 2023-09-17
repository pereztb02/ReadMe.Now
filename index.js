// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [
   inquirer.prompt([
    {
        type: "input",
        message: "Title?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe the app",
        name: "description",
    },
    {
        type: "confirm",
        message: "Do you want a table of contents?",
        name: "table",
    },
    {
        type: "input",
        message: "What are the steps required to install your app?",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide instructions or pictures of your app",
        name: "usage",
    },
    {
        type: "input",
        message: "Citations",
        name: "citations",
    },
    {
        type: "input",
        message: "What license are you using?",
        name: "licences",
    },
   ])
   .then(({
    title,
    description,
    table,
    installation,
    usage,
    citations,
    licences,
   }))
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', 'Hello World', (err) => {
        // If there is any error in writing to the file, return
        if (err) {
            console.error(err)
            return
        }
    
}
// Log this message if the file was written to successfully
console.log('wrote to file successfully')
)};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
