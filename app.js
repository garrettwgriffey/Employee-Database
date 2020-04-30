const ask = require("inquirer");
const q = require("./questions");
const connection = require("./connection");
// const { printTable } = require("console-table-printer");

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  firstQ();
});

function viewDb(table) {
  connection.query(`SELECT * FROM ${table}`, function(err, res) {
    if (err) throw err;
    console.table(res);
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
    switch (answer.firstQ) {
      case "Add department":
        addDepartment();
        break;
      case "View department":
        viewDb("departments");
        break;
      case "Add role":
        addRole();
        break;
      case "View role":
        viewDb("roles");
        break;
      case "Add employee":
        addEmployee();
        break;
      case "View employee":
        viewDb("employees");
        break;
      // case "Update employee roles";
      //   updateEmployeeRoles;
      //   break;
    }

  });
}


