const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/generateLogo.js');
const { Triangle } = require('./lib/generateLogo.js');
const { Circle } = require('./lib/generateLogo.js');


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
            svg += `${responses.shape}`;

            if (responses.shape === 'Square') {
                const square = new Square(responses.characters, responses.shapeColor, responses.textColor)
                fs.writeFile('./examples/${name}.svg', square.render(), (error) => {
                    if (error) {
                        console.error(error);
                    }
                });
            } else if (responses.shape === 'Circle') {
                const circle = new Circle(responses.characters, responses.shapeColor, responses.textColor)
                fs.writeFile('./examples/${name}.svg', circle.render(), (error) => {
                    if (error) {
                        console.error(error);
                    }
                })
            } else {
                const triangle = new Triangle(responses.characters, responses.shapeColor, responses.textColor)
                fs.writeFile('./examples/${name}.svg', triangle.render(), (error) => {
                    if (error) {
                        console.error(error);
                    }
                })
            }
        
        writeToFile(name, promptResponses)
        
          if (reponses.text.length > 4) {
            console.log("Sorry, logo text has to be 3 letters or less.");
          } else {
            writeToFile(`${reponses.characters}.svg`, responses);
          }
        });
      }
    
init(); 