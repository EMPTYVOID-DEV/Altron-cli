import { customGithubFetch } from "../utils/customFetch.js";
import { workingDir } from "../consts.js";
import fsExtra from "fs-extra";
import Path from "path";
import { logger } from "../utils/logger.js";

export async function loadComponents(paths: string[], writeLocation: string) {
  const registryPath = "src/registry";
  const fetchPromises = paths.map(async (path) => {
    return customGithubFetch(`${registryPath}/${path}`)
      .then((content) => writeFile(path, content, writeLocation))
      .then(() => {
        logger.success(`The component ${path} was loaded.`);
      });
  });
  return Promise.allSettled(fetchPromises);
}

async function writeFile(path: string, content: string, writeLocation: string) {
  const absolutePath = Path.join(workingDir, writeLocation, path);
  await fsExtra.createFile(absolutePath);
  return fsExtra.writeFile(absolutePath, content);
}
