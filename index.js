const mysql = require('mysql2');
const {prompt} = require('inquirer');
const menu = require('./libs/questions.js');
const functions = require('./libs/functions.js');

const database = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'employees_db'
    },
    console.log('Now connected to employees_db database')
);

const init = () => {
    displayMenu();
}
 
const displayMenu = async() => {
    const userSelection = await prompt(menu.menu)
    console.log(userSelection.menuSelection);
    if(userSelection.menuSelection == 'view-all-employees') {
        functions.viewAllEmployees(database);  
    }
    if(userSelection.menuSelection == 'view-all-dept') {
        functions.viewAllDepartments(database);  
    }


}
init();