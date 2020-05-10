import { adder } from "../public/js/adder.js";
import { describe, expect } from "@jest/globals";

describe("Check adding two expressions with one term with same exponent", () => {
  test(" - returns should be [ [3, 3], [3,2], [3] ]", () => {
    expect(
      adder(
        [[2, 2], [3]],
        [
          [3, 3],
          [1, 2],
        ]
      )
    ).toEqual([[3, 3], [3, 2], [3]]);
  });
  //
  // test("single term with exponent - returns should be [[3, 2]]", () => {
  //   expect(adder([[2, 2]], [[1, 2]])).toEqual([[3, 2]]);
  // });
  //
  // test("single term without exponent - returns should be [6]", () => {
  //   expect(adder([[3]], [[3]])).toEqual([[6]]);
  // });
});

// describe("Check removing empty constrains terms", () => {
//   test("with same exponent - returns should be [[6]]", () => {
//     expect(adder([[2, 2], [3]], [[-2, 2], [3]])).toEqual([[6]]);
//   });
//
//   test("constrain only - returns should be [[2, 2]]", () => {
//     expect(adder([[2, 2], [3]], [[-3]])).toEqual([[2, 2]]);
//   });
// });
