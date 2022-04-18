const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("makes the employee constructor object and sets values for responses", () => {
    const pemployee = new Employee("test", 1, "test.com");
    expect(pemployee.name).toEqual(expect.any(String));
    expect(pemployee.id).toEqual(expect.any(Number));
    expect(pemployee.email).toEqual(expect.any(String));
});

test("receives the name of the employee", () =>  {
    const pemployee = new Employee("test", 1, "test.com");
    expect(pemployee.getName()).toEqual(expect.any(String));
});

test("receives the ID of the employee", () => {
    const pemployee = new Employee("test", 1, "test.com");
    expect(pemployee.getId()).toEqual(expect.any(Number));
});

test("recieves the email of the employee", () => {
    const pemployee = new Employee("test", 1, "test.com");
    expect(pemployee.getEmail()).toEqual(expect.any(String));
});

test("recieves the role of the employee", () => {
    const pemployee = new Employee("test", 1, "test.com");
    expect(pemployee.getRole()).toEqual("Employee");
});