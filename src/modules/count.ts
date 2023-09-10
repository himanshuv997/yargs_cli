/**
 * @file A command-line utility for counting words, characters, and lines in a text file.
 * @module count
 * @requires fs
 */


import * as fs from 'fs';

/**
 * Defines the command-line options for counting words, characters, and lines in a text file.
 *
 * @typedef {Object} CountOptions
 * @property {boolean} w - Display only the word count (default behavior).
 * @property {boolean} c - Include character count in addition to word count.
 * @property {boolean} l - Include line count in addition to word count.
 * @property {string} inputFile - Path to the input text file | filename.
 */
export type CountOptions = {
  w: boolean;
  c: boolean;
  l: boolean;
  inputFile: string; 
}

/**
 * The command to count words, characters, and lines in a text file.
 *
 * @type {string}
 */
export const command: string = 'count <inputFile>';


/**
 * A description of the count command.
 *
 * @type {string}
 */
export const describe: string = 'Count words, characters, and lines in a text file';


/**
 * Configures the options and positional argument for the count command.
 *
 * @param {Object} yargs - The yargs instance.
 * @returns {Object} - The yargs instance with configured options.
 */
export const builder = (yargs) =>
  yargs
    .options({
      w: {
        type: 'boolean',
        alias: 'words',
        default: true,
        description: 'Display only the word count (default behavior)',
      },
      c: {
        type: 'boolean',
        alias: 'characters',
        default: false,
        description: 'Include character count in addition to word count',
      },
      l: {
        type: 'boolean',
        alias: 'lines',
        default: false,
        description: 'Include line count in addition to word count',
      },
    })
    .positional('inputFile', {
      describe: 'Path to the input text file | file-name',
      type: 'string',
    });

/**
 * Handles the count command, counting words, characters, and lines in the specified text file.
 *
 * @param {CountOptions} argv - The parsed command-line arguments.
 */
export const handler = (argv: CountOptions) => {
  try {
    const inputFile = argv.inputFile;
    if (!fs.existsSync(inputFile)) {
      console.error('Error: The specified input file does not exist.');
      process.exit(1);
    }

    const fileContent = fs.readFileSync(inputFile, 'utf-8');
    let wordCount = 0;
    let charCount = 0;
    let lineCount = 0;

    if (argv.w) {
      // Count words using regular expression
      wordCount = fileContent.split(/\s+/).filter(Boolean).length;
    }

    if (argv.c) {
      // Count characters
      charCount = fileContent.length;
    }

    if (argv.l) {
      // Count lines
      lineCount = fileContent.split('\n').length;
    }

    // Display the counts based on user options
    if (argv.w) {
      console.log('Word Count:', wordCount);
    }

    if (argv.c) {
      console.log('Character Count:', charCount);
    }

    if (argv.l) {
      console.log('Line Count:', lineCount);
    }
  } catch (error) {
    console.error('Error reading the input file:', error);
    process.exit(1);
  }
};
