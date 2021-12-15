#!/usr/bin/env node

const ora = require('ora');
const clipboard = require('clipboardy');
const { hashSync, genSaltSync } = require('bcryptjs');

const obj = {};
let copy = false;
const [, , ...args] = process.argv;

const spinner = ora('Generating salt').start();

if (args.length === 0) spinner.fail('No arguments provided');
else if (args.length === 1)
  if (args[0].length === 36) {
    clipboard.writeSync(hashSync(args[0], genSaltSync(10)));
    spinner.succeed('Salt copied to clipboard');
  } else spinner.fail('Invalid argument');
else {
  args.map((arg, index) => {
    if (arg === '--id') obj.id = args[index + 1];
    else if (arg === '--name') obj.name = args[index + 1];
    else if (arg === '--email') obj.email = args[index + 1];
    else if (arg === '--copy') copy = true;
  });

  if (obj.id.length === 36) {
    obj.hash = hashSync(obj.id, genSaltSync(10));

    if (copy) {
      clipboard.writeSync(Object.values(obj).join(', '));
      spinner.succeed('Salt copied to clipboard');
    } else {
      spinner.succeed('Salt printed to console\n');
      console.log(obj);
    }
  } else spinner.fail('Invalid argument');
}
