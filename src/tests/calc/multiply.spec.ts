import multiply from "../../calc/multiply";

describe("multiply", () => {
  it("should multiply correctly", () => {
    const multiplied = multiply(2, 3);
    const expected = 6;

    expect(multiplied).toBe(expected);
  });
});
