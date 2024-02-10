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
            svg = `<svg version="1.1" width="200" height="150" xmlns="http://www.w3.org/2000/svg">`;
            svg += `<g>`;
            let shapeResponse;

            if (responses.shape === 'Square') {
                shapeResponse = new Square(responses.characters, responses.shapeColor, responses.textColor)
                svg += shapeResponse.render();
            } else if (responses.shape === 'Circle') {
                shapeResponse = new Circle(responses.characters, responses.shapeColor, responses.textColor)
                svg += shapeResponse.render();
            } else {
                shapeResponse = new Triangle(responses.characters, responses.shapeColor, responses.textColor)
                svg += shapeResponse.render();
            }
            
            
            fs.writeFile(`./examples/${responses.characters}.svg`, svg, handleWriteFileError);

            if (responses.characters.length > 4) {
            console.log("Sorry, logo text has to be 3 letters or less.");
            } else {
            writeToFile(`${responses.characters}.json`, responses);
            }
            });
        }
    
init(); 