USE employeetracker_db;

INSERT INTO department (id, name,)
VALUES (1, "deptName");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "title", INT, INT);
​
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1,"first_name", "last_name", INT, INT);


-- /////////////////////////////////////////////////////////Activity Example////////////////////////////////////////////////////////////
-- -- -- Updates the row where the column name is peter --

-- -- UPDATE people
-- -- SET has_pet = true, pet_name = "Franklin", pet_age = 2
-- -- WHERE name = "Peter";

-- SELECT * FROM authors;
-- SELECT * FROM books;

-- -- show ALL books with authors
-- -- INNER JOIN will only return all matching values from both tables
-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM books
-- LEFT JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;
