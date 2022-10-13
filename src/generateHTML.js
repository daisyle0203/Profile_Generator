// Manager card
const generateManager = function (manager) {
  return `
    <div
          class="card my-5 mx-4 border border-light border-3"
          style="width: 18rem; height: 21rem"
        >
          <div class="card-body bg-primary text-light shadow rounded-top">
            <h5 class="card-title fs-2">${manager.name}</h5>
            <p class="card-text fs-4">
              <i class="fa-solid fa-coffee fa-beat"></i> Manager
            </p>
          </div>
          <ul
            class="list-group bg-light py-4 px-3 rounded-0 shadow rounded"
            style="height: 13rem"
          >
            <li class="list-group-item rounded-top border-light">
            ${manager.id}
            </li>
            <li class="list-group-item border-light">
              Email: <a href="daisy.le0203@gmail.com">${manager.email}</a>
            </li>
            <li class="list-group-item border-light rounded-bottom">
            ${manager.officeNumber}
            </li>
          </ul>
        </div>
        `
}

// Engineer card
const generateEngineer = function (engineer) {
  return `
    <div
    class="card my-5 mx-4 border border-light border-3"
    style="width: 18rem; height: 21rem"
  >
    <div class="card-body bg-primary text-light shadow rounded-top">
      <h5 class="card-title fs-2">${engineer.name}</h5>
      <p class="card-text fs-4">
        <i class="fa-solid fa-coffee fa-beat"></i> Engineer
      </p>
    </div>
    <ul
      class="list-group bg-light py-4 px-3 rounded-0 shadow rounded"
      style="height: 13rem"
    >
      <li class="list-group-item rounded-top border-light">
      ${engineer.id}
      </li>
      <li class="list-group-item border-light">
        Email: <a href="daisy.le0203@gmail.com">${engineer.email}</a>
      </li>
      <li class="list-group-item border-light rounded-bottom">
      ${engineer.github}
      </li>
    </ul>
  </div>
    `
}

// Intern card
const generateIntern = function (intern) {
  return `
    <div
    class="card my-5 mx-4 border border-light border-3"
    style="width: 18rem; height: 21rem"
  >
    <div class="card-body bg-primary text-light shadow rounded-top">
      <h5 class="card-title fs-2">${intern.name}</h5>
      <p class="card-text fs-4">
        <i class="fa-solid fa-coffee fa-beat"></i> Engineer
      </p>
    </div>
    <ul
      class="list-group bg-light py-4 px-3 rounded-0 shadow rounded"
      style="height: 13rem"
    >
      <li class="list-group-item rounded-top border-light">
      ${intern.id}
      </li>
      <li class="list-group-item border-light">
        Email: <a href="daisy.le0203@gmail.com">${intern.email}</a>
      </li>
      <li class="list-group-item border-light rounded-bottom">
      ${intern.school}
      </li>
    </ul>
  </div>
    `
}

// Push array to page
generateHTML = (data) => {
  pageArr = []

  for (const element of data) {
    const employee = element
    const role = employee.getRole()

    if (role === "Manager") {
      const managerCard = generateManager(employee)

      pageArr.push(managerCard)
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee)

      pageArr.push(engineerCard)
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee)

      pageArr.push(internCard)
    }
  }

  const employeeCards = pageArr.join("")

  const generateTeam = generateTeamPage(employeeCards)
  return generateTeam
}

// Generate HTML page
const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
    
        <script
          src="https://kit.fontawesome.com/49fc406ccc.js"
          crossorigin="anonymous"
        ></script>
    
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <header>
          <nav class="navbar bg-danger">
            <div class="container-fluid">
              <a class="navbar-brand mx-auto fs-1 fw-bold text-light" href="#"
                >My Team</a
              >
            </div>
          </nav>
        </header>
    
        <main>
          <div class="container p-5 d-flex flex-wrap justify-content-around">
            ${employeeCards}
          </div>
        </main>
      </body>
    </html>
    
  `
}

module.exports = generateHTML
