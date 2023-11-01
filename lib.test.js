const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test("avg([3,5,7]) should return 5", ()=> {
    expect(lib.avg([3,5,7])).toBe(5);
});

test("avg([-5,5]) should be 0", ()=>{
    expect(lib.avg([-5,5])).toBe(0);
});