import { blockDependenciesJson, blocks } from "../types.js";

export function getDependencies(
  choices: blocks[],
  blockDependencies: blockDependenciesJson
) {
  const components = new Set();
  const packages = new Set();
  for (let choice of choices) {
    //          const choiceComponents=blockDependencies.components.
  }
}
