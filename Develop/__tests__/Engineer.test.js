const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("name" in obj).toEqual(true);
})

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("id" in obj).toEqual(true);
    })

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("email" in obj).toEqual(true);
    })

    it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("github" in obj).toEqual(true);
    })

    it("should return an object containing a 'getGithub' method when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect(typeof obj.getGithub).toBe("function");
    })

    it("should return an object containing a 'getName' method when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect(typeof obj.getName).toBe("function");
    })

    it("should return an object containing a 'getId' method when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect(typeof obj.getId).toBe("function");
    })

    it("should return an object containing a 'getEmail' method when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect(typeof obj.getEmail).toBe("function");
    })

    it("should return an object containing a 'getRole' method when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect(typeof obj.getRole).toBe("function");
    })

    it("should return the string 'Engineer' when called from a new instance of Engineer", () => {
        const obj = new Engineer();
  
        expect(obj.getRole()).toBe('Engineer');
    })

});
