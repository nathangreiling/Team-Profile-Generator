const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test("makes intern constructor object and sets a value paramater for school", () => {
    const pintern = new Intern("test", 1, "test.com", "testschool")
    expect(pintern.school).toEqual(expect.any(String));
});
test("recieves school name from the employee", () => {
    const pintern = new Intern("test", 1, "test.com", "testschool")
    expect(pintern.getSchool()).toEqual(expect.any(String));
});
test("recieves role from the employee", () => {
    const pintern = new Intern("test", 1, "test.com", "testschool")
    expect(pintern.getRole()).toEqual("Intern");
} );
