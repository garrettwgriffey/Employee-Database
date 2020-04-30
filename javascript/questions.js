module.exports = {
  addDept: [
    {
      type: "input",
      message: "Enter a DEPARTMENT NAME you want to add:",
      name: "name",
    },
  ],
  addRole: [
    {
      type: "input",
      message: "Enter the ROLE TITLE you want to add:",
      name: "title",
    },
    {
      type: "input",
      massage: "Enter the SALARY for this Role:",
      name: "salary",
    },
    {
      type: "input",
      massage: "Enter the DEPARTMENT ID for this Role:",
      name: "department_id",
    },
  ],
  addEmployee: [
    {
      type: "input",
      message: "Enter the EMPLOYEE'S FIRST NAME you want to add:",
      name: "first_name",
    },
    {
      type: "input",
      message: "Enter the EMPLOYEE'S LAST NAME you want to add:",
      name: "last_name",
    },
    {
      type: "input",
      message: "Enter the ROLE ID you want to add:",
      name: "role_id",
    },
    {
      type: "input",
      message: "Enter the MANAGER ID you want to add:",
      name: "manager_id",
    },
  ],
  updateEmpRole: [
    {
      type: "input",
      message: "Enter the ID of the EMPLOYEE you want to update:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter the new ROLE of the EMPLOYEE you want to add:",
      name: "role_id",
    },
  ],
};
