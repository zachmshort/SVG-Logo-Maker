const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/square.js');
const { Triangle } = require('./lib/triangle.js');
const { Circle } = require('./lib/circle.js');

inquirer.prompt([
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
    ])
    .then((response) => {
        if (response.shape === 'Square') {
            const square = new Square(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', square.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        } else if (response.shape === 'Circle') {
            const circle = new Circle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', circle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        } else {
            const triangle = new Triangle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', triangle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        }
    })
    .then(() => {
        return console.log("Check out your logo, called logo.svg!")
    });
