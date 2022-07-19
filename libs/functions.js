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
    db.query("select role.id, title, salary, name as department from role join departments on role.department_id = departments.id order by department, title", function (err, results) {
        if (err) return console.error(err);
        //display the results in a console table
        console.table(results);
    });
} 
const addDepartment = (db, department) => {
    db.query("insert into departments (name) values('"+department+"')", function (err, results) {
        if (err) return console.error(err);
    });
} 
const addRole = (db, title, salary, department_id) => {
    db.query("insert into role (title, salary, department_id) values('"+title+"', "+salary+", "+department_id+")", function (err, results) {
        if (err) return console.error(err);
    });
} 
const addEmployee = (db, first_name, last_name, role_id, manager_id) => {
    db.query("insert into employee (first_name, last_name, role_id, manager_id) values('"+first_name+"', '"+last_name+"', "+role_id+", "+manager_id+")", function (err, results) {
        if (err) return console.error(err);
    });
} 





module.exports = {
    viewAllEmployees,
    viewAllDepartments,
    viewAllRoles,
    addDepartment,
    addRole,
    addEmployee
}