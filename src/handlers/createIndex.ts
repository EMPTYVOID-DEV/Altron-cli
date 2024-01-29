import { workingDir } from "../consts.js";
import Path from "path";
import fsExtra from "fs-extra";
import { logger } from "src/utils/logger.js";

export function createIndex(altronPath: string, componentPaths: string[]) {
  let importContent = "";
  let componentMap = "";
  const indexPath = Path.join(workingDir, altronPath, "index.js");
  fsExtra.createFileSync(indexPath);
  for (let componentPath of componentPaths) {
    importContent += `${addNewImport(componentPath)}\n`;
    componentMap += `${addComponentMap(componentPath)},\n`;
  }
  let indexContent = `${importContent}\nexport const componentMap=new Map([\n${componentMap}])`;
  fsExtra.writeFileSync(indexPath, indexContent);
  logger.success("The import index has been created successfully.");
}

function addNewImport(componentPath: string) {
  // parent dir is like extra-core
  const [version, parentDir, fileName] = componentPath.split("/");
  const [componentName, extension] = fileName.split(".");
  return `import ${componentName.toUpperCase()} from "./${parentDir}/${fileName}"`;
}

function addComponentMap(componentPath: string) {
  const [version, parentDir, fileName] = componentPath.split("/");
  const [componentName, extension] = fileName.split(".");
  return `["${componentName}",${componentName.toUpperCase()}]`;
}
