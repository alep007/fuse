import { getDirname, getPath } from "./utils.js";

import { reader } from "./reader.js";
import { exportToJson } from "./exportToJson.js";

async function main() {
  const filepath = getPath(import.meta.url, "../../data/ftemplate.xlsx");
  const outputPath = getPath(import.meta.url, "../../data/output.json");

  const jsonContent = await reader(filepath);

  exportToJson(jsonContent, outputPath);
}

main();
