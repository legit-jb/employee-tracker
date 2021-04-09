const mysql = require('mysql');
const inquirer = require('inquirer');
require('dotenv').config();

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});

doSomething = () => {
  inquirer
    .prompt([
      {
        name: "option",
        type: "list",
        message: "select",
        choices: [
          "add new role",
          "view all roles",
          "add new department",
          "view all departments",
          "update employee's role",
          "add a new employee",
          "view all employees",
          "end"
        ]

      }
    ])
    .then(function (response) {
      console.log("got to switch")
      console.log("option " + response.option);
      switch (response.option) {
        case "update employee's role":
          updateRole();
          break;

        case "add new role":
          addRole();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "add new department":
          newDepartment();
          break;

        case "view all departments":
          viewDepartments();
          break;

        case "add a new employee":
          addEmployee();
          break;

        case "view all employees":
          console.log("view employees")
          viewEmployees();
          break;

        default:
          console.log("message ends");
          return;
      }
      // end of switch
    });
  // end of .then
}
// end of doSomething function

const updateRole = () => {
  console.log("update role");
  doSomething();
}

const addRole = () => {
  console.log("add role");
  doSomething();
};

const viewRoles = () => {
  console.log("view roles");
  doSomething();
};

const newDepartment = () => {
  console.log("new department");
  doSomething();
};

const viewDepartments = () => {
  console.log("view department");
  doSomething();
};

const addEmployee = () => {
  console.log("add employee");
  doSomething();
};

const viewEmployees = () => {
  connection.query('SELECT * FROM employee', (err, rows) => {
    if (err) throw err;

    rows.forEach((row) => {
        console.table(row);
    });
    doSomething();
});
};

const init = () => {
  doSomething();
}

init();
