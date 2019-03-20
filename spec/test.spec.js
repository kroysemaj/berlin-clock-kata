describe("Berlin Clock", () => {
  it("0", () => {
    expect(convertSingleMinutes(0)).toBe("0000");
  });
  it("1", () => {
    expect(convertSingleMinutes(1)).toBe("Y000");
  });
  it("5", () => {
    expect(convertSingleMinutes(5)).toBe("0000");
  });
  it("10", () => {
    expect(convertSingleMinutes(10)).toBe("0000");
  });
  it("6", () => {
    expect(convertSingleMinutes(6)).toBe("Y000");
  });

  it("2", () => {
    expect(convertSingleMinutes(2)).toBe("YY00");
  });
});
