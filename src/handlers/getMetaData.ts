import { blockDependenciesJson, registryJson } from "src/types.js";
import { customGithubFetch } from "../utils/customFetch.js";

export async function getMetaData(): Promise<{
  registry: registryJson;
  blockDependencies: blockDependenciesJson;
}> {
  const responses = await Promise.allSettled([
    customGithubFetch("registry.json"),
    customGithubFetch("blockDependencies.json"),
  ]);
  // @ts-ignore
  const registry = JSON.parse(responses[0].value);
  // @ts-ignore
  const blockDependencies = JSON.parse(responses[1].value);
  return { registry, blockDependencies };
}
