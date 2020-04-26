var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewAllDepartments() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function addAllDepartments() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function addAllRoles() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function addAllEmployees() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

// inquirer questions
var addDept = [
  {
    type: "input",
    message: "Enter a DEPARTMENT NAME you want to add:",
    name: "department",
  },
];
var addRole = [
  {
    type: "input",
    message: "Enter the ROLE TITLE you want to add:",
    name: "title",
  },
  {
    type: "input",
    massage: "Enter the SALARY for this Role:",
    name: "salary",
  },
  {
    type: "input",
    massage: "Enter the DEPARTMENT ID for this Role:",
    name: "department_id",
  }
  ];
var addEmployee = [
  {
    type: "input",
    message: "Enter the EMPLOYEE NAME you want to add:",
    name: "employee",
  }
  ]
  .then(response1 => {
      console.log(response1)
  roundTwo(response1)
  })
