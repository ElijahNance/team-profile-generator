const Employee = require("../lib/Employee");
// Test for Employee Class
describe("Employee", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("name" in obj).toEqual(true);
})

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("id" in obj).toEqual(true);
    })

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("email" in obj).toEqual(true);
    })

    it("should return an object containing a 'getName' method when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect(typeof obj.getName).toBe("function");
    })

    it("should return an object containing a 'getId' method when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect(typeof obj.getId).toBe("function");
    })

    it("should return an object containing a 'getEmail' method when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect(typeof obj.getEmail).toBe("function");
    })

    it("should return an object containing a 'getRole' method when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect(typeof obj.getRole).toBe("function");
    })

    it("should return the string 'Employee' when called from a new instance of Employee", () => {
        const obj = new Employee();
  
        expect(obj.getRole()).toBe('Employee');
    })

});
