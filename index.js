const inquirer = require("inquirer");
////////////////////////////////////////
const connection = require("./db/connection.js")
/////////////////////////////////////////////
require("console.table");
const db = require("./db");

init();
function init() {
  CallPrompt();
}

async function CallPrompt() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "what would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "view_employees"
        },
        {
          name: "View All Employees by department",
          value: "view_employees_by_department"
        },
        {
          name: "View All Employees by Manager",
          value: "view_employees_by_manager"
        },
        {
          name: "Add Employee",
          value: "add_employee"
        },
        {
          name: "Delete Employee",
          value: "delete_employee"
        },
        {
          name: "Update Employee role",
          value: "update_employee_role"
        },
        {
          name: "Update Employee Manager",
          value: "update_employee_manager"
        },
        {
          name: "View All Roles",
          value: "view_all_roles"
        }
      ]
    }
  ]).then(function(choice) {
    console.log(choice);
    switch (choice.choice) {
      case "view_employees":
        return viewEmployees();
      case "view_employees_by_department":
        return viewEmployeesByDepartment();
      case "view_employees_by_manager":
        return viewEmployeesByManager();
      case "add_employee":
        return addEmployee();
      case "delete_employee":
        return deleteEmployee();
      case "update_employee_role":
        return updateEmployee();
      case "update_employee_manager":
        return updateEmployee();
      case "view_all_roles":
        return viewAllRoles();
      default:
        console.log("No options");
    }
  });
  
}

async function viewEmployees() {
  const employees = await db.findAllEmployees();
  console.table(employees);
  CallPrompt();
}

async function viewEmployeesByDepartment() {}

async function viewEmployeesByManager() {}

async function addEmployee() {
  inquirer.prompt([
    {
      name: "emp_first_name",
      type: "input",
      message: "What is the Employee's First Name?",
      
    },
    {
      name: "emp_last_name",
      type: "input",
      message: "What is the Employee's Last Name?",
    },
    {
      name: "emp_role",
      type: "list",
      message: "What is the Employee's role?",
      choices:["SALES LEAD", "SALES PERSON", "LEAD ENGINEER", "SOFTWARE ENGINEER", "ACCOUNT MANAGER", "ACCOUNTANT", "LEGAL TEAM LEAD"],
    },
    {
      name: "emp_role",
      type: "list",
      choices:["SALES LEAD", "SALES PERSON", "LEAD ENGINEER", "SOFTWARE ENGINEER", "ACCOUNT MANAGER", "ACCOUNTANT", "LEGAL TEAM LEAD"],
      message: "What is the Employee's role?"
    },
    {
      name: "emp_role",
      type: "list",
      message: "Who is the Employee's Manger?",
      choices:["Bossman Headhoncho", "Bigchief Headhoncho", "Bigboi Headhoncho"]
    }
  ]).then(function(answer){
    console.log(answer)

  })
  
}

async function deleteEmployee() {}

async function updateEmployee() {}

async function viewAllRoles() {}
