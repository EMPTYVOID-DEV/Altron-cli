import { logger } from "../utils/logger.js";

export function whatNext() {
  logger.success("What next ?(sveltekit devs)");
  logger.info("1-Import altron inside your +page.svelte");
  logger.info("2-Create a +page.ts/js");
  logger.info(
    "3-Import and use 'getDynamicComponents' inside the load function. Pass it a list of blocks names that you re planning to use."
  );
  logger.info(
    "4-The function returns a map of name-componentClass return that from the load function"
  );
  logger.info("5-Pass the returned components map to altron");
  logger.success("Happy coding");
}
