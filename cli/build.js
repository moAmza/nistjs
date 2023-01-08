#!/usr/bin/env node

const ignoredFolders = ["node_modules", "dist"];

const run = async () => {
  const path = await import("path");
  const fs = await import("fs");
  const url = await import("url");
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.cpSync(path.join(__dirname, "../builder/"), "./", {
    recursive: true,
    force: true,
    filter: (s, d) => {
      let res = true;
      ignoredFolders.forEach(
        (f) => (res &&= !s.startsWith(path.join(__dirname, "../builder/", f)))
      );
      console.log(s, res);
      return res;
    },
  });

  fs.rename(path.join(".npmignore"), path.join(".gitignore"), () => {});
};

run();
