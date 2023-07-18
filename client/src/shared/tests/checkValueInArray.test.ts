// const checkValueInArray = require("../lib/checkValueInArray");
import {checkValueInArray} from "../lib/checkValueInArray";

describe("checkValueInArray function", () => {
  test("checking that 1 in the array", () => {
    expect(checkValueInArray(1, [2, 1, 4])).toBe(true);
  });
  test("checking that 2 is not in the array", () => {
    expect(checkValueInArray(2, [1, 3, 4, 5])).toBe(false);
  });
});
