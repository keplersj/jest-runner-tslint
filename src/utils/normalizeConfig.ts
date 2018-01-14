import * as cosmiconfig from "cosmiconfig";
import { ILinterOptions } from "tslint";

const explorer = cosmiconfig("jest-runner-tslint", { sync: true });

export function getTslintOptions(config) {
  const result: ICosmiconfigOptions | undefined = explorer.load(config.rootDir);
  if (result) {
    return { ...BASE_CONFIG, ...result.config.cliOptions };
  } else {
    return BASE_CONFIG;
  }
}

const BASE_CONFIG: ILinterOptions = {
  fix: false,
  formatter: "stylish"
};

interface ICosmiconfigOptions {
  config: {
    cliOptions: ILinterOptions;
  };
}
