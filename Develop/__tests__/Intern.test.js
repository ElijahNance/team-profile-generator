const Intern = require("../lib/Intern");

describe("Intern", () => {

    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("name" in obj).toEqual(true);
})

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("id" in obj).toEqual(true);
    })

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("email" in obj).toEqual(true);
    })

    it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("email" in obj).toEqual(true);
    })

    it("should return an object containing a 'getSchool' method when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect(typeof obj.getSchool).toBe("function");
    })

    it("should return an object containing a 'getName' method when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect(typeof obj.getName).toBe("function");
    })

    it("should return an object containing a 'getId' method when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect(typeof obj.getId).toBe("function");
    })

    it("should return an object containing a 'getEmail' method when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect(typeof obj.getEmail).toBe("function");
    })

    it("should return an object containing a 'getRole' method when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect(typeof obj.getRole).toBe("function");
    })

    it("should return the string 'Intern' when called from a new instance of Intern", () => {
        const obj = new Intern();
  
        expect(obj.getRole()).toBe('Intern');
    })

});
