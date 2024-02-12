const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/generateLogo.js');
const { Triangle } = require('./lib/generateLogo.js');
const { Circle } = require('./lib/generateLogo.js');

function writeToFile(filename, data) {
    fs.writeFile(filename, JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Your ${filename} has been created.`);
        }
    });
}

const questions = [
        {
            type: 'input',
            message: 'Enter three characters.',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Choose a shape from the list below.',
            choices: [
                { name: 'Square', value: 'Square' },
                { name: 'Circle', value: 'Circle' },
                { name: 'Triangle', value: 'Triangle' },
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter shapes color.',
            name: 'shapeColor',
        },
    ];

function handleWriteFileError(error) {
    if (error) {
        console.log(error);
    }
}
    function init() { 
        inquirer.prompt(questions).then((responses) => {
            let svg = "";
            let shapeResponse;

            if (responses.shape === 'Square') {
                shapeResponse = new Square()
            } else if (responses.shape === 'Circle') {
                shapeResponse = new Circle()
            } else {
                shapeResponse = new Triangle()
            }
            
            shapeResponse.characters = responses.characters;
            shapeResponse.setColor(responses.shapeColor);
            shapeResponse.setTextColor(responses.textColor);

            svg += shapeResponse.render();

            fs.writeFile(`./examples/${responses.characters}.svg`, svg, handleWriteFileError);

            if (responses.characters.length > 4) {
            console.log("Sorry, logo text has to be 3 letters or less.");
            }
            });
        }
    
init(); 