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

    if(userSelection.menuSelection == 'view-all-employees') {
        functions.viewAllEmployees(database);  
    }
    if(userSelection.menuSelection == 'view-all-dept') {
        functions.viewAllDepartments(database);  
    }
    if(userSelection.menuSelection == 'view-all-roles') {
        functions.viewAllRoles(database);  
    }
    if(userSelection.menuSelection == 'add-a-department') {
        functions.addDepartment(database, userSelection.departmentName);  
    }
    if(userSelection.menuSelection == 'add-a-role') {
        functions.addRole(database, userSelection.roleTitle, userSelection.roleSalary, userSelection.roleID);  
    }
    if(userSelection.menuSelection == 'add-an-employee') {
        functions.addEmployee(database, userSelection.employeeFirstName, userSelection.employeeLastName, userSelection.employeeRoleID, userSelection.employeeManagerID);  
    }
    if(userSelection.menuSelection == 'update-employee-role') {
        functions.updateEmployeeRole(database, userSelection.employeeID, userSelection.newEmployeeRoleID);  
    }
    if(userSelection.menuSelection != 'exit') {
        displayMenu();
    } else {
        process.exit();
    }


}
init();