const { Stack, validateBrackets } = require("../index");

describe("Validate Brackets Function", () => {
    it("Should validate a correct simple sequence", ()=>{
        let bool = validateBrackets("{}(){}");
        expect(bool).toBe(true);
    })

    it("Should validate a nested sequence",()=>{
        let bool = validateBrackets("(){}[[]]");
        expect(bool).toBe(true);
    })

    it("Should validate a complex sequence with extra characters",()=>{
        let bool = validateBrackets("()[[Extra Characters]]");
        expect(bool).toBe(true);
    })

    it("Should return false on an incorrect sequence", ()=>{
        let bool = validateBrackets("[({}]");
        let bool2 = validateBrackets("{(})")
        expect(bool).toBe(false);
        expect(bool2).toBe(false);
    })

});
