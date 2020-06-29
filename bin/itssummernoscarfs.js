#!/usr/bin/env node

const fs = require("fs");
const promisedFs = fs.promises;
const path = require("path");

const target = "@scarf/scarf";
const targetFix = "gist:bd5c18861b76eb34f068bf2ed7de903e";

async function check() {
  const isScarfInstalled = await fs.existsSync(
    path.resolve(process.cwd(), "node_modules/", target)
  );

  if (!isScarfInstalled) {
    console.log("Awesome! No @scarf/scarf package on your neck. Exiting ...");
    process.exit(0);
  }

  console.log(
    "Oops! I found @scarf/scarf package in your project. Fixing it..."
  );

  await kill();
}

async function kill() {
  const packageJSON = JSON.parse(
    await promisedFs.readFile(
      path.resolve(process.cwd(), "package.json"),
      "utf8"
    )
  );

  try {
    if (!packageJSON.devDependencies) {
      packageJSON.devDependencies = {};
    }

    if (
      packageJSON.devDependencies[target] &&
      packageJSON.devDependencies[target] === targetFix
    ) {
      console.log("Fix is already applied to your project. Exiting...");
      process.exit(0);
    }

    packageJSON.devDependencies[target] = targetFix;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  try {
    await promisedFs.writeFile(
      path.resolve(process.cwd(), "package.json"),
      JSON.stringify(packageJSON, null, 2)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

check();
