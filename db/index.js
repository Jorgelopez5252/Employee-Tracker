const connection = require("./connection");

class DB{
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees(){
        return this.connection.query("Select employee.id, employee.first_name, employee.last_name , role.title, department.deptName As department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) As manager From employee Left Join role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    addemployee(){
      return this.connection.query(" ")  
    }


}

module.exports = new DB(connection);