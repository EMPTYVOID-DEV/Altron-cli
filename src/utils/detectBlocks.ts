import fsExtra from "fs-extra";
import { blocksList, workingDir } from "../consts.js";
import { blocks } from "../types.js";
import Path from "path";

export function detectBlocks(path: string): blocks[] {
  const pathToViews = Path.join(workingDir, path, "viewBlocks");
  if (!fsExtra.existsSync(pathToViews)) return [];
  const dirContent = fsExtra.readdirSync(pathToViews);
  const existingBlocks = blocksList.filter((block) => {
    return dirContent.find((el) => el.toLowerCase().includes(block));
  });
  return existingBlocks;
}
