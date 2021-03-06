DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
deptName VARCHAR(30)
);

CREATE TABLE role(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INTEGER,
constraint fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR (30),
role_id INTEGER,
manager_id INTEGER,
constraint fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
);


