import { workingDir } from "../consts.js";
import fsExtra from "fs-extra";
import path from "path";

export function mkdir(altronPath: string) {
  const absolutePath = path.join(workingDir, altronPath);
  fsExtra.mkdirSync(absolutePath, {
    recursive: true,
  });
}
