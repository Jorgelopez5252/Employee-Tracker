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
          name: "View All Employees by Mangaer",
          value: "view_employees_by_manager"
        }
      ]
    }
  ]);
  switch(choice){
      case "view_employees": return viewEmployees();
      case "view_employees_by_department": return viewEmployeesByDepartment();
      case "view_employees_by_manager": return viewEmployeesByManager();
      default: console.log("No options");
  }
}

async function viewEmployees(){

    const employees  = await db.findAllEmployees();
    console.table(employees);
    CallPrompt();


}
