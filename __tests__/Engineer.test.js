const { test, expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("makes engineer constructor and sets a value parameter for github", () => {
    const pengineer = new Engineer("test", 1, "test.com", "testhub");
    expect(pengineer.github).toEqual(expect.any(String)); 
});
test("recieves the github information", () => {
    const pengineer = new Engineer("test", 1, "test.com", "testhub");
    expect(pengineer.getGithub()).toEqual(expect.any(String));
});
test("recieves the role of the employee", () => {
    const pengineer = new Engineer("test", 1, "test.com", "testhub");
    expect(pengineer.getRole()).toEqual("Engineer");
});