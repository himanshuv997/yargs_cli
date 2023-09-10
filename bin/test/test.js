#!/usr/bin/env node
"use strict";
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
const fs = __importStar(require("fs"));
const yargs = __importStar(require("yargs"));
const argv = yargs
    .command('count <inputFile>', 'Count words, characters, and lines in a text file', (CountOptions) => {
    return CountOptions
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
        describe: 'Path to the input text file',
        type: 'string',
    });
}, (argv) => {
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
})
    .command('analyze <inputFile>', 'Analyze the text file', (analyzeYargs) => {
    return analyzeYargs
        .options({
        a: {
            type: 'boolean',
            alias: 'optionA',
            default: false,
            description: 'Include option A in the analysis',
        },
        b: {
            type: 'boolean',
            alias: 'optionB',
            default: false,
            description: 'Include option B in the analysis',
        },
    })
        .positional('inputFile', {
        describe: 'Path to the input text file',
        type: 'string',
    });
}, (argv) => {
    try {
        const inputFile = argv.inputFile;
        if (!fs.existsSync(inputFile)) {
            console.error('Error: The specified input file does not exist.');
            process.exit(1);
        }
    }
    catch (error) {
        console.error('Error reading the input file:', error);
        process.exit(1);
    }
})
    .demandCommand()
    .help()
    .argv;
//# sourceMappingURL=test.js.map