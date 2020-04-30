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

function addToDb(table, questions) {
  ask.prompt(questions).then(answers => {
    const keys = Object.keys(answers);
    const values = Object.values(answers);
    console.log(keys);
    console.log(values);
    connection.query(`INSERT INTO ${table} (${keys}) VALUES (?);`, [values], function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
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
        addToDb("departments", q.addDept);
        break;
      case "View department":
        viewDb("departments");
        break;
      case "Add role":
        addToDb("roles", q.addRole);
        break;
      case "View role":
        viewDb("roles");
        break;
      case "Add employee":
        addToDb("employees", q.addEmployee);
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


