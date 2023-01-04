const Manager = require("../lib/Manager");
// Test for Manager Class
describe("Manager", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("name" in obj).toEqual(true);
})

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("id" in obj).toEqual(true);
    })

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("email" in obj).toEqual(true);
    })

    it("should return an object containing an 'officeNumber' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("officeNumber" in obj).toEqual(true);
    })

    it("should return an object containing a 'getName' method when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect(typeof obj.getName).toBe("function");
    })

    it("should return an object containing a 'getId' method when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect(typeof obj.getId).toBe("function");
    })

    it("should return an object containing a 'getEmail' method when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect(typeof obj.getEmail).toBe("function");
    })

    it("should return an object containing a 'getRole' method when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect(typeof obj.getRole).toBe("function");
    })

    it("should return the string 'Manager' when called from a new instance of Manager", () => {
        const obj = new Manager();
  
        expect(obj.getRole()).toBe('Manager');
    })

});

