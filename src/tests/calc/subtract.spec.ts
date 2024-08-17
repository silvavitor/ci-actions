import subtract from "../../calc/subtract";

describe("subtract", () => {
  it("should subtract correctly", () => {
    const subtracted = subtract(2, 1);
    const expected = 1;

    expect(subtracted).toBe(expected);
  });
});
