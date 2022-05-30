import { checkDeterminedDispatch } from "./util";

describe("check if dispatch is defined:", () => {
  test("should throw an error", () => {
    expect(checkDeterminedDispatch).toThrow("should determine dispatch action");
  });
  test("should return a declared function", () => {
    expect(typeof checkDeterminedDispatch).toBe("function");
  });
});

export {};
