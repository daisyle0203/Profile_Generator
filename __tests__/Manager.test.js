const Manager = require("../lib/Manager")
const empName = "Alex"
const id = 2
const email = "alex@email.com"
const officeNumber = 123
const testManager = new Manager(empName, id, email, officeNumber)

test("We can create a new instantiation of the Manager class", () => {
  const testValue = testManager
  expect(typeof testValue).toBe("object")
})

test("Class manager has name attribute", () => {
  const testValue = "Alex"
  expect(testManager.name).toBe(testValue)
})

test("Class manager has id attribute", () => {
  const testValue = 2
  expect(testManager.id).toBe(testValue)
})

test("Class manager has email attribute", () => {
  const testValue = "alex@email.com"
  expect(testManager.email).toBe(testValue)
})
test("Class manager has office attribute", () => {
  const testValue = 123
  expect(testManager.officeNumber).toBe(testValue)
})

test("Class manager has getName method that returns the name", () => {
  const testValue = empName
  expect(testManager.getName()).toBe(testValue)
})

test("Class manager has getId method that returns the id", () => {
  const testValue = id
  expect(testManager.getId()).toBe(testValue)
})

test("Class manager has getEmail method that returns the email", () => {
  const testValue = email
  expect(testManager.getEmail()).toBe(testValue)
})

test("Class manager has getRole method that returns the role", () => {
  const testValue = "Manager"
  expect(testManager.getRole()).toBe(testValue)
})
