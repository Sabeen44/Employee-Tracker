const express = require("express");

const inquirer = require("inquirer");

const mysql = require("mysql2");

const PORT = process.env.PORT || 3000;
const app = express();

const {
  ViewDepartment,
  ViewRoles,
  ViewEmployee,
  AddToDept,
  AddToRoles,
  AddToEmployee,
} = require("./class.js");

inquirer
  .prompt([
    {
      type: "list",
      message: "Choose one of the following options",
      name: "options",
      choices: [
        { name: "View Department Table", value: "department" },
        { name: "View Roles Table", value: "roles" },
        { name: "View Employee Table", value: "employee" },
        { name: "Add a Department", value: "addDept" },
        { name: "Add a role", value: "addRole" },
        { name: "Add an employee", value: "addEmployee" },
        { name: "Update employee role", value: "updateRole" },
      ],
    },
  ])
  .then((answers) => {
    console.log(answers);

    if (answers.options === "department") {
      showDepartment = new ViewDepartment();
      department = answers.options;
      showDepartment.viewData(department);
    }

    if (answers.options === "roles") {
      showDepartment = new ViewRoles();

      roles = answers.options;
      showDepartment.viewData(roles);
    }

    if (answers.options === "employee") {
      showDepartment = new ViewEmployee();

      employee = answers.options;
      showDepartment.viewData(employee);
    }

    if (answers.options === "addDept") {
      inquirer
        .prompt([
          { type: "input", name: "newDept", message: "Add Department Name" },
        ])
        .then((answers) => {
          insertString = answers.newDept;
          addDepartment = new AddToDept();
          addDepartment.insertData("department", insertString);
        });
    }

    if (answers.options === "addRole") {
      inquirer
        .prompt([
          { type: "input", name: "title", message: "Add Title:" },
          { type: "input", name: "salary", message: "Add Salary:" },
          { type: "input", name: "deptId", message: "Add Dept_Id:" },
        ])
        .then((answers) => {
          insertString = `'${answers.title}', ${answers.salary}, ${answers.deptId}`;
          console.log(insertString);
          addRole = new AddToRoles();
          addRole.insertData("roles", insertString);
        });
    }

    if (answers.options === "addEmployee") {
      inquirer
        .prompt([
          { type: "input", name: "firstName", message: "Add First Name:" },
          { type: "input", name: "lastName", message: "Add Last Name:" },
          { type: "input", name: "roleId", message: "Add Role Id:" },
          { type: "input", name: "managerId", message: "Add Manager Id:" },
        ])
        .then((answers) => {
          insertString = `'${answers.firstName}', '${answers.lastName}', ${answers.roleId},${answers.managerId}`;
          console.log(insertString);
          addEmployee = new AddToEmployee();
          addEmployee.insertData("employee", insertString);
        });
    }
  });

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
