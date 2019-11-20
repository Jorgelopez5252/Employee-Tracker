const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "Tony1738",
    database: "employeetracker_db"
})

connection.connect();

connection.query = util.promisify(connection.query);


module.exports = connection;