INSERT INTO departments (name)
VALUES
("Information Technology"),
("Sales"),
("Janitorial"),
("Marketing"),
("Acquisitions"),
("Research and Development");

INSERT INTO roles (title, salary, department_id)
VALUES
("Developer", 80000, 1),
("Janitor", 30000, 3),
("Customer Care", 60000, 5),
("Researcher", 80000, 6),
("Graphic Designer", 70000, 4),
("Recruiter", 65000, 5),
("Scientist", 70000, 6),
("Salesman", 80000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Doe", 1, null),
("Jane", "Doe", 2, null),
("Bugs", "Bunny", 3, null),
("Elmer", "Fudd", 4, null),
("Peewee", "Herman", 5, 1),
("Rick", "Sanchez", 6, null),
("Peter", "Griffin", 1, null),
("Mick", "Jagger", 2, null),
("Justin", "Beiber", 3, null),
("Tony", "Montana", 4, null);