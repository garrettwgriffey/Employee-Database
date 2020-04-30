const ask = require("inquirer");
const q = require("./javascript/questions");
const connection = require("./javascript/connection");

// mySQL connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  firstQ();
});

//displays table with results in command-line
function viewDb(table, cb=null) {
  connection.query(`SELECT * FROM ${table}`, function(err, res) {
    if (err) throw err;
    console.table(res);
    if (cb) {
      cb();
    } else {
      connection.end();
    }
  });
}

// function for updating database
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

  // function for updating database
function updateEmployeeRoles() {
  ask.prompt(q.updateEmpRole).then(answers => {
    const values = Object.values(answers);
    connection.query(`UPDATE employees SET role_id = ${values[1]} WHERE id = ${values[0]};`, function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    }); 
  });
}

// initial question prompt with promise and switch statement
function firstQ(){
  ask.prompt({
    type: "list",
    message: "What do you want to do?",
    choices: ["Add department", "View department", "Add role", "View role", "Add employee", "View employee", "Update employee roles"],
    name: "firstQ"
  })
  .then(answer => { 
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
      case "Update employee roles":
        viewDb("employees", updateEmployeeRoles);
        break;
    }

  });
}


