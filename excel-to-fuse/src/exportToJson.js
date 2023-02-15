import fs from "fs";

export function exportToJson(content, outputPath) {
  fs.writeFile(outputPath, JSON.stringify(content), function (err) {
    if (err) throw err;
    console.log("completed!");
  });
}
