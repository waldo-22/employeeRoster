
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // Arrange
      let name = "Employee Reniel";
      let id = 1;
      let email = "1stfakeEmail@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
      //Assert
      expect(employee.name).toEqual("Employee Reniel");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("1stfakeEmail@gmail.com");
    });
  });
  describe("getName", () => {
    it("should set name value when I getName ", () => {
      let name = "Employee Reniel"
      let employee = new Employee(name);
      expect (employee.getName()).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should get ID values when set ", () => {
      let employee = new Employee("Employee Reniel", 1);
      expect(employee.id).toEqual(1)
    });
  });
  describe("getEmail", () => {
    it("should return email when getEmail is called ", () => {
      let employee = new Employee("Employee Reniel", 1); 
      let getEmail = employee.getEmail();
      expect(employee.getEmail()).toEqual(getEmail);
    });
  });
  describe("getRole", () => {
    it("should return Employee when getRole is called ", () => {
      //Arrange
      // Arrange
      let name = "Employee Reniel";
      let id = 1;
      let email = "1stfakeEmail@gmail.com";
      let employee = new Employee(name, id, email);
      //Act
      let role = employee.getRole();
      //Assert
      expect(role).toEqual("Employee");
    });
  });
});
