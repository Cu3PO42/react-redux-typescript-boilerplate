declare function require(module: string): any;

interface WebpackModule {
  hot: any;
}

declare var module: WebpackModule;
