const Intern = require("../lib/Intern")
const empName = "Sam"
const id = 4
const email = "Sam@email.com"
const school = "ASU"
const testIntern = new Intern(empName, id, email, school)

test("We can create a new instantiation of the Intern class", () => {
  const testValue = testIntern
  expect(typeof(testValue)).toBe("object")
})

test("Class Intern has name attribute", () => {
  const testValue = "Sam"
  expect(testIntern.name).toBe(testValue)
})

test("Class Intern has id attribute", () => {
  const testValue = 4
  expect(testIntern.id).toBe(testValue)
})

test("Class Intern has email attribute", () => {
  const testValue = "Sam@email.com"
  expect(testIntern.email).toBe(testValue)
})

test("Class Intern has school attribute", () => {
  const testValue = "ASU"
  expect(testIntern.school).toBe(testValue)
})

test("Class Intern has getSchool method that returns school name", () => {
  const testValue = "ASU"
  expect(testIntern.getSchool()).toBe(testValue)
})

test("Class Intern has getId method that returns the id", () => {
  const testValue = id
  expect(testIntern.getId()).toBe(testValue)
})

test("Class Intern has getEmail method that returns the email", () => {
  const testValue = email
  expect(testIntern.getEmail()).toBe(testValue)
})

test("Class Intern has getRole method that returns the role", () => {
  const testValue = "Intern"
  expect(testIntern.getRole()).toBe(testValue)
})
