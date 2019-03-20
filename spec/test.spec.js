describe("Berlin Clock", () => {
  describe("Single minute lamp row", () => {
    describe("displaying 0000 (no lamps)", () => {
      it("for 0", () => {
        expect(convertSingleMinutes(0)).toBe("0000");
      });

      it("for 5", () => {
        expect(convertSingleMinutes(5)).toBe("0000");
      });

      it("for 10", () => {
        expect(convertSingleMinutes(10)).toBe("0000");
      });
    });

    describe("displaying Y000", () => {
      it(" for 1", () => {
        expect(convertSingleMinutes(1)).toBe("Y000");
      });

      it("for 6", () => {
        expect(convertSingleMinutes(6)).toBe("Y000");
      });
    });

    describe("displaying YY00", () => {
      it("for 2", () => {
        expect(convertSingleMinutes(2)).toBe("YY00");
      });

      it("for 22", () => {
        expect(convertSingleMinutes(22)).toBe("YY00");
      });
    });

    describe("displaying YYY0", () => {
      it("for 3", () => {
        expect(convertSingleMinutes(3)).toBe("YYY0");
      });

      it("for 18", () => {
        expect(convertSingleMinutes(18)).toBe("YYY0");
      });
    });

    describe("displaying YYYY (all lamps lit)", () => {
      it("for 4", () => {
        expect(convertSingleMinutes(4)).toBe("YYYY");
      });

      it("for 29", () => {
        expect(convertSingleMinutes(18)).toBe("YYY0");
      });
    });
  });
  describe("Five minute lamp row", () => {
    describe("displaying 00000000000", () => {
      it("for 0", () => {
        expect(convert5MinuteBlocks(0)).toBe("00000000000");
      });

      it("for 1", () => {
        expect(convert5MinuteBlocks(1)).toBe("00000000000");
      });

      it("for 4", () => {
        expect(convert5MinuteBlocks(1)).toBe("00000000000");
      });
    });
    describe("displaying Y0000000000", () => {
      it("for 5", () => {
        expect(convert5MinuteBlocks(5)).toBe("Y0000000000");
      });

      it("for 6", () => {
        expect(convert5MinuteBlocks(6)).toBe("Y0000000000");
      });

      it("for 9", () => {
        expect(convert5MinuteBlocks(9)).toBe("Y0000000000");
      });
    });
    describe("displaying YY000000000", () => {
      it("for 10", () => {
        expect(convert5MinuteBlocks(10)).toBe("YY000000000");
      });

      it("for 11", () => {
        expect(convert5MinuteBlocks(11)).toBe("YY000000000");
      });

      it("for 14", () => {
        expect(convert5MinuteBlocks(14)).toBe("YY000000000");
      });
    });
  });
});
