Date.now = jest.fn(() => 1482363367071);

import * as path from "path";
import run from "./run";

describe("TSLint Jest Runner", () => {
  describe("failing fixture", () => {
    it("matches snapshot", () => {
      const result = run({
        testPath: path.join(__dirname, "__fixtures__", "bad.ts"),
        config: { rootDir: path.join(__dirname, "__fixtures__") },
      });

      expect(result).toMatchSnapshot({
        failureMessage: expect.any(String),
        perfStats: expect.any(Object),
        testFilePath: expect.any(String),
      });
    });
  });

  describe("passing fixture", () => {
    it("matches snapshot", () => {
      const result = run({
        testPath: path.join(__dirname, "__fixtures__", "good.ts"),
        config: { rootDir: path.join(__dirname, "__fixtures__") },
      });

      expect(result).toMatchSnapshot({
        perfStats: expect.any(Object),
        testFilePath: expect.any(String),
      });
    });
  });
});
