"use strict";
/**
 * @file A command-line utility for counting words, characters, and lines in a text file.
 * @module count
 * @requires fs
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.command = void 0;
const fs = __importStar(require("fs"));
/**
 * The command to count words, characters, and lines in a text file.
 *
 * @type {string}
 */
exports.command = 'count <inputFile>';
/**
 * A description of the count command.
 *
 * @type {string}
 */
exports.describe = 'Count words, characters, and lines in a text file';
/**
 * Configures the options and positional argument for the count command.
 *
 * @param {Object} yargs - The yargs instance.
 * @returns {Object} - The yargs instance with configured options.
 */
const builder = (yargs) => yargs
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
exports.builder = builder;
/**
 * Handles the count command, counting words, characters, and lines in the specified text file.
 *
 * @param {CountOptions} argv - The parsed command-line arguments.
 */
const handler = (argv) => {
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
    }
    catch (error) {
        console.error('Error reading the input file:', error);
        process.exit(1);
    }
};
exports.handler = handler;
//# sourceMappingURL=count.js.map