require('console.table');

const viewAllEmployees = (db) => {
    db.query("select employee.id,employee.first_name,employee.last_name,role.title,departments.name as department,role.salary,concat(manager.first_name,' ',manager.last_name) as manager from employee join role on employee.role_id=role.id join departments on role.department_id=departments.id left outer join employee as manager on employee.manager_id = manager.id order by last_name asc, first_name asc;", function (err, results) {
        if (err) return console.error(err);
        //display the results in a console table
        console.table(results);
    });
} 
const viewAllDepartments = (db) => {
    db.query("select id, name from departments order by name", function (err, results) {
        if (err) return console.error(err);
        //display the results in a console table
        console.table(results);
    });
} 
const viewAllRoles = (db) => {
    db.query("select employee.id,employee.first_name,employee.last_name,role.title,departments.name as department,role.salary,concat(manager.first_name,' ',manager.last_name) as manager from employee join role on employee.role_id=role.id join departments on role.department_id=departments.id left outer join employee as manager on employee.manager_id = manager.id order by last_name asc, first_name asc;", function (err, results) {
        if (err) return console.error(err);
        //display the results in a console table
        console.table(results);
    });
} 




module.exports = {
    viewAllEmployees,
    viewAllDepartments,
    viewAllRoles
}