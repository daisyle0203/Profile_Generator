const Engineer = require("../lib/Engineer")
const empName = "Kenny"
const id = 3
const email = "Kenny@email.com"
const github = "kenny123"
const testEngineer = new Engineer(empName, id, email, github)

test("We can create a new instantiation of the Engineer class", () => {
  const testValue = testEngineer
  expect(typeof(testValue)).toBe("object")
})

test("Class Engineer has name attribute", () => {
  const testValue = "Kenny"
  expect(testEngineer.name).toBe(testValue)
})

test("Class Engineer has id attribute", () => {
  const testValue = 3
  expect(testEngineer.id).toBe(testValue)
})

test("Class Engineer has email attribute", () => {
  const testValue = "Kenny@email.com"
  expect(testEngineer.email).toBe(testValue)
})

test("Class Engineer has github attribute", () => {
  const testValue = "kenny123"
  expect(testEngineer.github).toBe(testValue)
})

test("Class Engineer has getGithub method that returns GitHub username", () => {
  const testValue = "kenny123"
  expect(testEngineer.getGithub()).toBe(testValue)
})

test("Class Engineer has getId method that returns the id", () => {
  const testValue = id
  expect(testEngineer.getId()).toBe(testValue)
})

test("Class Engineer has getEmail method that returns the email", () => {
  const testValue = email
  expect(testEngineer.getEmail()).toBe(testValue)
})

test("Class Engineer has getRole method that returns the role", () => {
  const testValue = "Engineer"
  expect(testEngineer.getRole()).toBe(testValue)
})
