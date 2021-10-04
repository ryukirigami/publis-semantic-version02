#!/usr/bin/env node
// make this file to run globally with node (with: $ npm i -g)

const inquirer = require('inquirer');
const fs = require('fs');

// create question of prompt for inquirer
const QUESTIONS = [
    {
        name: 'user-name',
        type: 'input',
        message: 'Your name:',

        // validation for input type   
        validate: function (input) {
            if (/^([A-Za-z\d])+$/.test(input)) return true;
            else return 'User name may only include letters.';
        }
    },
    {
        name: 'user-ages',
        type: 'input',
        message: 'Yaour age:',

        // validation for input type   
        validate: function (input) {
            if (/^([0-9\d])+$/.test(input)) return true;
            else return 'Age name may only include numbers.';
        }
    }
];

// create inquirer interactive question
inquirer.prompt(QUESTIONS)
    .then(answers => {

        // get answer of specific question
        const name = answers['user-name'];
        const age = answers['user-ages'];

        console.log(`Hello ${name}, you are on ${age} years old.`)
        
    });
