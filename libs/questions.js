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
    }
  ]
  
  module.exports = {
    menu
  }