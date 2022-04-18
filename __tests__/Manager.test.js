const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("makes the manager constructor object and requires the value of the office number to be a number", () => {
    const pmanager = new Manager("test", 1, "test.com", 2);
    expect(pmanager.officeNumber).toEqual(expect.any(Number));
});
test("recieves the role of the employee", () => {
    const pmanager = new Manager("test", 1, "test.com", 2);
    expect(pmanager.getRole()).toEqual("Manager");
});