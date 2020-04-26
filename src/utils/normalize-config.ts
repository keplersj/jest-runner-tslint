import { cosmiconfigSync as cosmiconfig } from "cosmiconfig";
import { ILinterOptions } from "tslint";

const BASE_CONFIG: ILinterOptions = {
  fix: false,
  formatter: "stylish",
};

const explorer = cosmiconfig("jest-runner-tslint");

interface CosmiconfigOptions {
  config: {
    cliOptions: ILinterOptions;
  };
}

export function getTslintOptions(config): ILinterOptions {
  const result: CosmiconfigOptions | undefined = explorer.search(
    config.rootDir
  );
  if (result) {
    return { ...BASE_CONFIG, ...result.config.cliOptions };
  } else {
    return BASE_CONFIG;
  }
}
