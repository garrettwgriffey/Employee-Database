const mysql = require("mysql");
const ask = require("inquirer");
const q = require("./questions");
// const { printTable } = require("console-table-printer");

function viewEmployees() {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function addDepartment(name) {
  connection.query(`INSERT INTO departments(name)VALUES (${name})`, function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function addRole(title, salary, department_id) {
  connection.query(`INSERT INTO roles (title, salary, department_id) VALUES (${title, salary, department_id})`, function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function addEmployee() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function firstQ(){
  // inquirer.prompt goes here first question
  ask.prompt({
    type: "list",
    message: "What do you want to do?",
    choices: ["Add department", "View department", "Add role", "View role", "Add employee", "View employee", "Update employee roles"],
    name: "firstQ"
  })
  .then(answer => { 
    // const action = answer.firstQ;
    switch (answer.action) {
      case "Add department":
        addDepartment();
        break;
      case "View department":
        viewDepartments();
        break;
      case "Add role":
        addRole();
        break;
      case "View role":
        viewRoles();
        break;
      case "Add employee":
        addEmployee();
        break;
      case "View employee":
        viewEmployees();
        break;
      // case "Update employee roles";
      //   updateEmployeeRoles;
      //   break;
    }

  });
}
