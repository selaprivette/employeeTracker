const menu = [
    {
      type: "list",
      message: "Select your task",
      choices: [
        { name: "View all departments", value: "view-all-dept" },
        { name: "View all roles", value: "view-all-roles" },
        { name: "View all employees", value: "view-all-employees" },
        { name: "Add a department", value: "add-a-department" },
        { name: "Add a role", value: "add-a-role" },
        { name: "Add an employee", value: "add-an-employee" },
        { name: "Update an employee's role", value: "update-employee-role" },
        { name: 'Exit', value: "exit" }],
      name: "menuSelection"
    },
    {
        type: "input",
        message: "What is the department name?",
        name: "departmentName",
        when: (answers) => answers.menuSelection == "add-a-department",
      },
      {
        type: "input",
        message: "What is the role title?",
        name: "roleTitle",
        when: (answers) => answers.menuSelection == "add-a-role",
      },
      {
        type: "input",
        message: "What is the role salary?",
        name: "roleSalary",
        when: (answers) => answers.menuSelection == "add-a-role",
      },
      {
        type: "input",
        message: "What is the role's department id?",
        name: "roleID",
        when: (answers) => answers.menuSelection == "add-a-role",
      },
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "employeeFirstName",
        when: (answers) => answers.menuSelection == "add-an-employee",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "employeeLastName",
        when: (answers) => answers.menuSelection == "add-an-employee",
      },
      {
        type: "input",
        message: "What is the employee's role id?",
        name: "employeeRoleID",
        when: (answers) => answers.menuSelection == "add-an-employee",
      },
      {
        type: "input",
        message: "What is the employee's manager id?",
        name: "employeeManagerID",
        when: (answers) => answers.menuSelection == "add-an-employee",
      }
  ]
  
  module.exports = {
    menu
  }