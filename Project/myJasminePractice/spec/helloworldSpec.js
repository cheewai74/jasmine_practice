describe("helloWorld", () => {
    it("returns hello world", () => {
      var actual = helloWorld();
      expect(actual).toBe("Hello world!");
      expect(actual).toMatch("Hello world!");
      expect(actual).not.toMatch("Hello earth!");
      expect(actual).not.toBe("Hello earth!");
      expect(actual).toContain("world!");
    });


  })