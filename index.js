// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
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
        type: "list",
        message: "What license are you using?",
        name: "licenses",
        choices: ["Apache", "GNU", "MIT", "None"]
    },
    {
        type: "input",
        message: "How can we test your app?",
        name: "test",
    },
    {
        type: "input",
        message: "Add your GitHub link",
        name: "git",
    },
    {
        type: "input",
        message: "Add you e-mail address",
        name: "email",
    },
   ])
   //turns title into filename then drops it in user_readMe file
   .then((data) => {
    const fileName = `./user_readME/${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(fileName,generateMarkdown(data), (err) => {
        // If there is any error in writing to the file, return
        if (err) {
            console.error(err)
            return
        }
        // Log this message if the file was written to successfully
console.log('wrote to file successfully')
   })
// ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', 'Hello World', (err) => {
//         // If there is any error in writing to the file, return
//         if (err) {
//             console.error(err)
//             return
//         }
    
// }

});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
