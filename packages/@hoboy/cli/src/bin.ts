#! /usr/bin/env node

import minimist from 'minimist';
import {
  chalk, safeRequire, log, error,
} from '@hoboy/cli-shared-utils';

const { _: cmds, ...args } = minimist(process.argv.slice(2));

const CMD_PREFIX = '@hoboy/cli-';

const cmd = cmds[0];

if (!cmd) {
  // TODO 这里之后补充 help 返回
  log('No command.');
  process.exit(10);
}

const pkgName = `${CMD_PREFIX}${cmd}`;
const run = safeRequire(pkgName);

if (!run) {
  error(`${chalk.red(pkgName)} is not a CLI package`);
  process.exit(20);
}

run(process.cwd(), {
  ...args,
});
