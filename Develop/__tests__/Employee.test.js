const Employee = require("../lib/Employee");

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
});
