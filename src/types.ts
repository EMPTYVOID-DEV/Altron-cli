import { blocksList } from "./consts.js";

export type blocks = (typeof blocksList)[number];

export type registryJson = {
  description: string;
  versions: string[];
  registry: {
    version: string;
    changes: { component: string; path: string }[];
  }[];
};

export type blockDependenciesJson = {
  description: string;
  components: { block: string; dependencies: string[] }[];
  packages: { block: string; dependencies: string[] }[];
};
