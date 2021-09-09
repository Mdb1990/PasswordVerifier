const 
  {verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached} = require("./verifyPassword.js");

  
test("should not be blank", () => {
  expect(isNotNull("pass")).toBe(true)
    });

test("has the right length", () => {
  expect(hasRightLength("12345678")).toBe(true)
    });
    
test("has the right length", () => {
  expect(hasRightLength("123456789")).toBe(false)
    });
  ​
test("has uppercase", () => {
  expect(hasUpperCaseCharacter("Asdfg")).toBe(true)
    });
  ​
test("has lower case", () => {
  expect(hasLowerCaseCharacter("aSDF")).toBe(true)
    })
  ​
test("has a digit", () => {
  expect(hasDigit("dfgh68")).toBe(true)
    })
  ​
test("has reached minimum conditions", () => {
  expect(minimumConditionsReached("sdfQ5")).toBe(true)
    })
  ​
test("is password verified", () => {
  expect(verifyPassword("sdfQ5")).toBe(true)
    })