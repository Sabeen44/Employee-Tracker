const express = require("express");
const mysql = require("mysql2");
const print = require("console.table");
// const server = require("./server.js");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "putYourNewPasswordHere",
    database: "hr_db",
  },
  console.log(`Connected to the hr_db database.`)
);

class ViewAll {
  constructor() {}

  viewData(tableName) {
    let viewQuery = `SELECT * FROM ${tableName}`;
    db.query(viewQuery, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    });
  }
}

class ViewDepartment extends ViewAll {
  constructor() {
    super();

    //this.tableName = "department";
  }
}

class ViewRoles extends ViewAll {
  constructor() {
    super();

    //this.tableName = "department";
  }
}

class ViewEmployees extends ViewAll {
  constructor() {
    super();

    //this.tableName = "department";
  }
}

// class AddToTable {
//   constructor() {}

// }

class AddToDept {
  constructor() {}

  insertData(tableName, insertString) {
    console.log("insertData function called");
    //let tableName;
    let addQuery = `INSERT INTO ${tableName} (name) VALUES ('${insertString}')`;
    console.log(addQuery);
    db.query(addQuery, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    });
  }
}

class AddToRoles {
  constructor() {}

  insertData(tableName, insertString) {
    console.log("insertData function called");
    //let tableName;
    let addQuery = `INSERT INTO ${tableName} (title,salary,department_id) VALUES (${insertString})`;
    console.log(addQuery);
    db.query(addQuery, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    });
  }
}

class AddToEmployee {
  constructor() {}

  insertData(tableName, insertString) {
    console.log("insertData function called");
    //let tableName;
    let addQuery = `INSERT INTO ${tableName} (first_name,last_name,role_id,manager_id) VALUES (${insertString})`;
    console.log(addQuery);
    db.query(addQuery, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    });
  }
}

// class AddToRoles extends AddToTable {
//   constructor() {
//     super();
//   }
// }
// class AddToEmployee extends AddToTable {
//   constructor() {
//     super();
//   }
// }

//   query() {
//     db.query(
//       `INSERT INTO department (name) VALUES (Custodial)`,
//       (err, results) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log(results);
//       }
//     );
//   }
// }

//module.exports.SelectAll = SelectAll;
//module.exports.InsertDepartment = InsertDepartment;
module.exports.ViewDepartment = ViewDepartment;
module.exports.ViewRoles = ViewRoles;
module.exports.ViewEmployee = ViewEmployees;
module.exports.AddToDept = AddToDept;
module.exports.AddToRoles = AddToRoles;
module.exports.AddToEmployee = AddToEmployee;
