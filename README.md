# yargs_cli

## Command Line Utility

This is a command-line utility that provides various operations for analyzing text files, such as counting words, characters, and lines. It is built using TypeScript and the yargs library for command-line argument parsing.

## Installation

To use this utility, you need to install it globally on your system. You can do this using npm:

```bash
npm install -g <your-package-name>
```

Usage
Once installed, you can use the utility from the command line with the following syntax:

```bash
word <command> [options]
```
### Available Commands
**Count**: Counts words, characters, and lines in a text file.

```bash
word count <inputFile> [options]
Options:
-w, --words: Display only the word count (default behavior).
-c, --characters: Include character count in addition to word count.
-l, --lines: Include line count in addition to word count.
```

**Example:**
```bash
word count mytextfile.txt -w -c
```
This command will count words and characters in the "mytextfile.txt" file and display the results.

## Folder Structure

Here is the folder structure of the project:

*bin*: Contains the compiled JavaScript files for the utility.
   - index.js: The main entry point for the utility.
   - modules: JavaScript files for individual utility modules.

*src*: Contains the TypeScript source code.
   - index.ts: The main TypeScript file that sets up the yargs commands.
   - modules: TypeScript files for individual utility modules.
   - test: Contains test files for the utility.

*LICENSE*: License information for the project.

*README.md*: This README file.

*package.json*: Project configuration and dependencies.

*package-lock.json*: Lockfile for npm dependencies.

*tsconfig.json*: TypeScript configuration.


## Development
To set up the development environment and build the utility from source, follow these steps:

**Clone the repository:**
```bash
git clone <repository-url>
```

**Install dependencies:**
```bash
cd <project-directory>
npm install
```

**Build the TypeScript code:**
```bash
npm run build
```

**Run the utility locally:**
```bash
node bin/index.js <command> [options]
```

## Testing:  

**Under Development**
