const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("makes the employee constructor object", () => {
    const employee = new Employee("test", 1, "test.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("receives the name of the employee", () =>  {
    const employee = new Employee("test", 1, "test.com");
    expect(employee.getName()).toEqual(expect.any(String));
});

test("receives the ID of the employee", () => {
    const employee = new Employee("test", 1, "test.com");
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("recieves the email of the employee", () => {
    const employee = new Employee("test", 1, "test.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("recieves the role of the employee", () => {
    const employee = new Employee("test", 1, "test.com");
    expect(employee.getRole()).toEqual("Employee");
});