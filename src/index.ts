import { welcome } from "./utils/welcome.js";
import { getMetaData } from "./handlers/getMetaData.js";
import { cli } from "./handlers/cli.js";
import { mkdir } from "./handlers/mkdir.js";

async function main() {
  welcome();
  // use the function
  const altronVersion = "2.0.0";
  const { registry, blockDependencies } = await getMetaData();
  const { path, choices } = await cli();
  mkdir(path);
}

main();
