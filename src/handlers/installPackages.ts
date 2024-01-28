import { execa } from "execa";
import { getUserPkgManager } from "../utils/getPackageManager.js";
import { workingDir } from "../consts.js";
import { logger } from "../utils/logger.js";

export async function installPackages(packages: string[]) {
  if (packages.length == 0) {
    logger.info("no packages to be installed");
    return;
  }
  const pkgManager = getUserPkgManager();
  try {
    const chilProcess = execa(pkgManager, ["install", ...packages], {
      cwd: workingDir,
    });
    chilProcess.stdout?.pipe(process.stdout);
    await chilProcess;
    logger.success(
      `The packages "${packages.join(" , ")}" were installed successfully`
    );
  } catch (error) {
    if (pkgManager != "pnpm")
      logger.error(
        `The cli got this error while installing packages ${error.message}`
      );
  }
}
