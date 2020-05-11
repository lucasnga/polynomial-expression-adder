import { expressionAdder } from "../public/js/adder_obj.js";
import { describe, expect } from "@jest/globals";

describe("Check adding two expressions with one term with same exponent", () => {
  test(" - returns should be {\"2\": 3, \"3\": 3, \"c\": 3}", () => {
    expect(
      expressionAdder(
        [[2, 2], [3]],
        [
          [3, 3],
          [1, 2],
        ]
      )
    ).toEqual({"2": 3, "3": 3, "c": 3});
  });

  test(" - returns should be {\"2\": 3, \"3\": 3, \"c\": 3}", () => {
    expect(
      expressionAdder(
        [
          [3, 3],
          [1, 2],
        ],
        [[2, 2], [3]]
      )
    ).toEqual({"2": 3, "3": 3, "c": 3});
  });

  test("single term with exponent - returns should be  {\"2\": 3}", () => {
    expect(expressionAdder([[2, 2]], [[1, 2]])).toEqual( {"2": 3});
  });

  test("single term without exponent - returns should be  {\"c\": 6}", () => {
    expect(expressionAdder([[3]], [[3]])).toEqual( {"c": 6});
  });
});

describe("Check removing empty constrains terms", () => {
  test("with same exponent - returns should be  {\"c\": 6}", () => {
    expect(expressionAdder([[2, 2], [3]], [[-2, 2], [3]])).toEqual( {"c": 6});
  });

  test("constrain only - returns should be [[2, 2]]", () => {
    expect(expressionAdder([[2, 2], [3]], [[-3]])).toEqual({"2": 2});
  });
});