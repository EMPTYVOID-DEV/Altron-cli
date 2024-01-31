import { customGithubFetch } from "../utils/customFetch.js";
import { workingDir } from "../consts.js";
import fsExtra from "fs-extra";
import Path from "path";
import { logger } from "../utils/logger.js";

export async function loadComponents(paths: string[], writeLocation: string) {
  const registryPath = "src/registry";
  // creating paralle request to github api to load the components content
  // all components are under src/registry we only need the version and the component name 'path'
  const fetchPromises = paths.map(async (path) => {
    return customGithubFetch(`${registryPath}/${path}`)
      .then((content) => {
        // removing the version from the path
        const pathWithoutVer = path.split("/");
        pathWithoutVer.shift();
        return writeFile(pathWithoutVer.join("/"), content, writeLocation);
      })
      .then(() => {
        logger.success(`The component ${path} was loaded.`);
      })
      .catch(() => {
        logger.error(`The component ${path} was not loaded`);
      });
  });
  return Promise.allSettled(fetchPromises);
}

function writeFile(path: string, content: string, writeLocation: string) {
  const absolutePath = Path.join(workingDir, writeLocation, path);
  fsExtra.createFileSync(absolutePath);
  return fsExtra.writeFile(absolutePath, content);
}
