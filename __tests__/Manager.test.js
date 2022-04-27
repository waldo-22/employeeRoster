const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set value of name, ID, and email", () => {
            let name = "Manager Ronnie";
            let id = 4;
            let email = "4thfakeEmail.com"
            let employee = new Employee(name, id, email);

            expect(employee.name).toEqual("Manager Ronnie");
            expect(employee.id).toEqual(4);
            expect(employee.email).toEqual("4thfakeEmail.com");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return office numbers when called", () => {
            let name = "Manager Ronnie";
            let id = 4;
            let email = "4thfakeEmail@gmail.com";
            let officeNumber = "1";
            let manager = new Manager(name, id, email, officeNumber);
            expect(manager.getOfficeNumber()).toEqual(officeNumber);

        });
    });
    describe("getRole", () => {
        it("should return Engineer", () => {
            let name = "Manager Ronnie";
            let id = 4;
            let email = "4thfakeEmail@gmail.com";
            let manager = new Manager(name, id, email);            
            let role = manager.getRole();
            expect(role).toEqual("Manager");
        });
    });
})