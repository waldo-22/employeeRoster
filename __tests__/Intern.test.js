const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should set value of name, ID, and email", () => {
            let name = "Intern Waldo";
            let id = 3;
            let email = "3rdfakeEmail@gmail.com"
            let employee = new Intern(name, id, email);

            expect(employee.name).toEqual("Intern Waldo");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("3rdfakeEmail@gmail.com");
        });
    });

    describe("getName", () => {
        it("should se value of name", () => {
            let employee = new Intern("Intern Waldo");
            expect(employee.name).toEqual("Intern Waldo");
        });
    });

    // describe("getId", () => {
    //     it("should return email value", () => {
    //         let employee = new Engineer("Intern Waldo", 3, "email");
    //         expect(employee.email).toEqual("email");
    //     });
    // });

    // describe("getGitHub", () => {
    //     it("should return GitHub link", () => {
    //         let employee = new Engineer("gitHub");
    //         let getGitHub = employee.getGitHub();
    //         expect(employee.github).toEqual("gitHub");
    //     });
    // });
    describe("getRole", () => {
        it("should return Engineer", () => {
            let employee = new Intern();
            let getRole = employee.getRole();
            expect(getRole).toEqual("Intern");
        });
    });
})