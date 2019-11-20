const { prompt } = require("inquirer");
require("console.table");
const db = require("./db");

init();
function init() {
  CallPrompt();
}

async function CallPrompt() {
  const { choice } = await prompt([
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
  ]);
  switch (choice) {
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
}

async function viewEmployees() {
  const employees = await db.findAllEmployees();
  console.table(employees);
  CallPrompt();
}

async function viewEmployeesByDepartment() {}

async function viewEmployeesByManager() {}

async function addEmployee() {
  const empFirstName = await prompt([
    {
      type: "input",
      name: "What is the Employee's First Name?",
      value: "emp_first_name"
    }
  ]);
  console.log(empFirstName)
  const empLastName = await prompt([
    {
      type: "input",
      name: "What is the Employee's Last Name?",
      value: "emp_last_name"
    }
  ]);
  console.log(empLastName)
}

async function deleteEmployee() {}

async function updateEmployee() {}

async function viewAllRoles() {}
