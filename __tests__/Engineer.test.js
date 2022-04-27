const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set value of name, ID, and email", () => {
            let name = "Engineer Ricky";
            let id = 2;
            let email = "2ndfakeEmail@gmail.com"
            let employee = new Engineer(name, id, email);
            expect(employee.name).toEqual("Engineer Ricky");
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual("2ndfakeEmail@gmail.com");
        });
    });
    describe("getName", () => {
        it("should se value of name", () => {
            let employee = new Engineer("Engineer Ricky");
            expect(employee.name).toEqual("Engineer Ricky");
        });
    });
    describe("getId", () => {
        it("should return email value", () => {
            let employee = new Engineer("Engineer Ricky", 2, "email");
            expect(employee.email).toEqual("email");
        });
    });
    describe("getRole", () => {
        it("should return Engineer", () => {
            let employee = new Engineer();
            let getRole = employee.getRole();
            expect(getRole).toEqual("Engineer");
        });
    });
})