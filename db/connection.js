const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "Tony1738",
    database: "employeetracker_db"
})

// possible remove error function
connection.connect(function(err){
 if (err) throw err;
 console.log("connected as id" + connection.threadId + "\n") ; 

});

connection.query = util.promisify(connection.query);


module.exports = connection;