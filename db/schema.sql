DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments (
  id INT(30) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE roles (
  id INT(30) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  salary  DECIMAL NOT NULL,
  department_id INT(30) NOT NULL,
  FOREIGN KEY(department_id) REFERENCES departments(id)
);
CREATE TABLE  employees (
  id INT(30) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(30) NOT NULL,
  manager_id INT(30),
  FOREIGN KEY(role_id) REFERENCES roles(id),
  FOREIGN KEY(manager_id) REFERENCES employees(id)
);

-- roles
--   CONSTRAINT fk_department FOREIGN KEY(departmentId) REFERENCES department(id) ON DELETE CASCADE

-- employees
--   CONSTRAINT fk_role FOREIGN KEY(roleId) REFERENCES role(id) ON DELETE CASCADE
