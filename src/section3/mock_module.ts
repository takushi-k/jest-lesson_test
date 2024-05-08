import fs from "fs";

export function readFile(path: string) {
  console.log(path)
  const data = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  console.log(data)
  return data;
}
