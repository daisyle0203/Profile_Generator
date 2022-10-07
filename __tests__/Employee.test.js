const Employee = require('../lib/Employee')
const empName = "Daisy"
const id = 1
const email = "daisy@email.com"
const testEmployee = new Employee(empName,id,email)
test("We can create a new instantiation of the Employee class", ()=>{
    const testValue = testEmployee
    expect(typeof(testValue)).toBe("object")
})

test("Class employee has name attribute", ()=>{
    const testValue = "Daisy"
    expect(testEmployee.name).toBe(testValue)
})

test("Class employee has id attribute", ()=>{
    const testValue = 1
    expect(testEmployee.id).toBe(testValue)
})

test("Class employee has email attribute", ()=>{
    const testValue = "daisy@email.com"
    expect(testEmployee.email).toBe(testValue)
})

test("Class employee has getName method that returns the name", ()=>{
    const testValue = empName
    expect(testEmployee.getName()).toBe(testValue)
})

test("Class employee has getId method that returns the id", ()=>{
    const testValue = id
    expect(testEmployee.getId()).toBe(testValue)
})

test("Class employee has getEmail method that returns the email", ()=>{
    const testValue = email
    expect(testEmployee.getEmail()).toBe(testValue)
})
test("Class employee has getRole method that returns the role", ()=>{
    const testValue = "Employee"
    expect(testEmployee.getRole()).toBe(testValue)
})