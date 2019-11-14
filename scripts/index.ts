#!/usr/bin/env node

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

import webpackTypescriptStarter from "./starter.scripts";

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split(".");
const major = parseInt(semver[0], 10);

if (major < 8) {
    console.error(
        `You are running Node
        ${currentNodeVersion}
        Webpack Typescript Starter requires Node 8 or higher.
        Please update your version of Node.`
    );
    process.exit(1);
}

webpackTypescriptStarter();
