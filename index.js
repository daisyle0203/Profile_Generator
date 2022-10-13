// Requires necessary resources
const inquirer = require("inquirer")
const fs = require("fs")

// Requires file that handles generating the HTML
const generateHTML = require("./src/generateHTML")

// Requires sub classes
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Create an empty employee list
const employeesList = []

// Function to create a manager
const addManager = () => {
  console.log(`Please build your team 👥`)

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true
          } else {
            console.log("Please enter the manager's name!")
            return false
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID!")
            return false
          } else {
            return true
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
            return true
          } else {
            console.log("Please enter an email!")
            return false
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number!")
            return false
          } else {
            return true
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput
      const manager = new Manager(name, id, email, officeNumber)

      employeesList.push(manager)
      console.log(manager)
    })
}

const addEmployee = () => {
  console.log(`Adding employees to the team 😊`)

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true
          } else {
            console.log("Please enter an employee's name!")
            return false
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID!")
            return false
          } else {
            return true
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
            return true
          } else {
            console.log("Please enter an email!")
            return false
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the the engineer's Github username?",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true
          } else {
            console.log("Please enter the engineer's Github username!")
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true
          } else {
            console.log("Please enter the intern's school!")
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // Deconstruct employeeData
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData
      let employee

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github)

        console.log(employee)
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school)

        console.log(employee)
      }

      employeesList.push(employee)

      if (confirmAddEmployee) {
        return addEmployee(employeesList)
      } else {
        return employeesList
      }
    })
}

// Function to generate HTML page
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(
        `Your team profile HTML page has been successfully generated 🎉`
      )
    }
  })
}

// Call the addManager function
addManager()
  .then(addEmployee)
  .then((employeesList) => {
    return generateHTML(employeesList)
  })
  .then((pageHTML) => {
    return writeFile(pageHTML)
  })
  .catch((err) => {
    console.log(err)
  })
