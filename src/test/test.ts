#!/usr/bin/env node
import * as fs from 'fs';
import * as yargs from 'yargs';


type CountOptions = {
  w: boolean;
  c: boolean;
  l: boolean;
  inputFile: string; 
}

type AnalyzeOptions = {
  a: boolean;
  b: boolean;
  inputFile: string; 
};

const argv = yargs
  .command<CountOptions>(
     'count <inputFile>',
     'Count words, characters, and lines in a text file',
    (CountOptions) => {
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
    },
    (argv: CountOptions) => {
      try {
        const inputFile: string = argv.inputFile;
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

      } catch (error) {
        console.error('Error reading the input file:', error);
        process.exit(1);
      }
    }
  )
  .command<AnalyzeOptions>(
    'analyze <inputFile>',
    'Analyze the text file',
    (analyzeYargs) => {
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
    },
    (argv: AnalyzeOptions) => {
      try {
        const inputFile: string = argv.inputFile;
        if (!fs.existsSync(inputFile)) {
          console.error('Error: The specified input file does not exist.');
          process.exit(1);
        }

      } catch (error) {
        console.error('Error reading the input file:', error);
        process.exit(1);
      }
    }
  )
  .demandCommand()
  .help()
  .argv;
