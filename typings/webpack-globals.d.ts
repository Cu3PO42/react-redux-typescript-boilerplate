declare function require(module: string): any;

interface WebpackModule {
  hot: any;
}

declare var module: WebpackModule;

interface ProcessGlobal {
  env: { [name: string]: string }
}

declare var process: ProcessGlobal;
