/**
 * Copyright (c) 2019-present, Tsz San Sam, CHAN
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const commander = require("commander");
const path = require("path");
const packageJson = require("../package.json");
const fs = require("fs-extra");
const chalk = require("chalk");

const program = new commander.Command();
const templateDirectory = path.resolve("template");
const DEBUG_PREFIX = chalk.blueBright("[Webpack Typescript Starter]");
let directoryName = "";
let projDirectory = "";

// define command
program.version(packageJson.version)
    .arguments("<directory_name>")
    .action(directory => {
        directoryName = directory;
        projDirectory = path.resolve(directoryName)
    })
    .parse(process.argv);

try {
    if (!directoryName) {
        throw new Error("Please provide a directory name.");
    }
    console.log(`${DEBUG_PREFIX}Thank you for using.`)
    // create directory
    fs.ensureDirSync(directoryName);
    console.log(`${DEBUG_PREFIX} Created the project directory: ${chalk.green(projDirectory)}`)
    // Copying file
    console.log(`${DEBUG_PREFIX} Cloning content to the project...`)
    fs.copySync(templateDirectory, projDirectory);
    console.log(`${DEBUG_PREFIX} ${chalk.green("Done!")}`);

    console.log(`${DEBUG_PREFIX} Thank you for using. Happy Coding!`)
    process.exit(0);
} catch (error) {
    console.error(chalk.red(error));
    console.log("\r");
    console.log(chalk.yellow(`Please use --help for checking the commands.`));
    process.exit(1);
}
