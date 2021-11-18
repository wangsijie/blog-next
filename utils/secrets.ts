import * as fs from "fs";
import * as path from "path";

export const getSecret = (key: string): string => {
  if (process.env[key]) {
    return process.env[key] as string;
  }

  const filePath = path.join("/run/secrets/", key);
  if (!fs.existsSync(filePath)) {
    throw new Error(`secret file does not exist: ${filePath}`);
  }
  return fs.readFileSync(filePath, { encoding: "utf-8" });
};
