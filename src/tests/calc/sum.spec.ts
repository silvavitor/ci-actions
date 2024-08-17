import sum from "../../calc/sum";

describe("sum", () => {
  it("should sum correctly", () => {
    const added = sum(1, 1);
    const expected = 3;

    expect(added).toBe(expected);
  });
});
