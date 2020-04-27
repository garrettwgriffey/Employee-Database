module.exports = {
  addDept: [
    {
      type: "input",
      message: "Enter a DEPARTMENT NAME you want to add:",
      name: "department",
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
      message: "Enter the EMPLOYEE NAME you want to add:",
      name: "employee",
    },
  ],
};
