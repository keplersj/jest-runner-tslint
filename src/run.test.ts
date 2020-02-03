import * as path from "path";
import run from "./run";

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (value, serialize) => {
    delete value.perfStats;
    delete value.testFilePath;
    value.testResults.forEach(result => {
      delete result.duration;
    });
    return serialize(value);
  },
  test: value =>
    value && value.perfStats && value.testFilePath && value.testResults
});

beforeAll(() => {
  process.env["FORCE_COLOR"] = "true";
});

describe("TSLint Jest Runner", () => {
  describe("failing fixture", () => {
    it("matches snapshot", () => {
      const result = run({
        testPath: path.join(__dirname, "__fixtures__", "bad.ts"),
        config: { rootDir: path.join(__dirname, "__fixtures__") }
      });

      expect(result).toMatchSnapshot();
    });
  });

  describe("passing fixture", () => {
    it("matches snapshot", () => {
      const result = run({
        testPath: path.join(__dirname, "__fixtures__", "good.ts"),
        config: { rootDir: path.join(__dirname, "__fixtures__") }
      });

      expect(result).toMatchSnapshot();
    });
  });
});
