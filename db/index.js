const connection = require("./connection");

class Db{
    createDepartment(department){
        return this.connection.query( `INSERT INTO departments (name) VALUE("${departments}")`);
    }

    createEmployee
}