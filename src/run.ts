import * as fs from "fs";
import { Configuration, Linter } from "tslint";
import { getTslintOptions } from "./utils/normalize-config";

module.exports = ({ testPath, config }) => {
  const start = Date.now();
  const options = getTslintOptions(config);

  const fileContents = fs.readFileSync(testPath, "utf8");
  const program = Linter.createProgram("tsconfig.json", config.rootDir);

  const linter = new Linter(options, program);
  const configuration = Configuration.findConfiguration(null, testPath).results;
  linter.lint(testPath, fileContents, configuration);
  const result = linter.getResult();

  const end = Date.now();

  return {
    console: null,
    displayName: "TSLint",
    failureMessage: result.failures.length && result.output,
    numFailingTests: result.errorCount,
    numPassingTests: result.errorCount ? 0 : 1,
    numPendingTests: 0,
    perfStats: {
      end,
      start
    },
    skipped: false,
    snapshot: {
      added: 0,
      fileDeleted: false,
      matched: 0,
      unchecked: 0,
      unmatched: 0,
      updated: 0
    },
    sourceMaps: {},
    testExecError: null,
    testFilePath: testPath,
    testResults:
      result.failures.length !== 0
        ? result.failures.map(failure => ({
            ancestorTitles: [],
            duration: end - start,
            failureMessages: [failure.getFailure()],
            fullName: undefined,
            location: {
              column: failure.getStartPosition().getLineAndCharacter()
                .character,
              line: failure.getStartPosition().getLineAndCharacter().line
            },
            numPassingAsserts: 0,
            status: "failed",
            title: failure.getFailure()
          }))
        : [
            {
              ancestorTitles: [],
              duration: end - start,
              failureMessages: [],
              fullName: undefined,
              location: undefined,
              numPassingAsserts: 1,
              status: "passed",
              title: ""
            }
          ]
  };
};
