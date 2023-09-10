#!/usr/bin/env node
import yargs from "yargs";
import * as api from "./modules/count";

yargs
  .command<api.CountOptions>(
    api.command,
    api.describe,
    api.builder,
    api.handler
  )
  .demandCommand(1, "Please provide a command.")
  .help().argv;
