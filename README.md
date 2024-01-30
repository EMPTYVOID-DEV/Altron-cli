# Altron CLI

The Altron CLI is a command-line tool designed to streamline the process of loading components for the Altron package. This tool simplifies the task of selecting and importing components into your project by interacting with the user through the command line.

## Usage

```bash

pnpm dlx @altron/altron-cli

```

## Description

The CLI tool prompts the user for the relative path from the current working directory where the Altron components are supposed to be loaded. The default path is set to src/components/altron. After specifying the path, the user is prompted to choose the blocks they want to load.

After that the cli will load the components from altron github repository taking in consideration the altron verision installed by the user.

Also it will create an index.js file that import all the loaded components and put there class references inside a map with there name as a key. This will be sent as a prop to altron main component.

### Note

This package needs a @altron/altron version 2.0.0 and above as peer dependency.

## License

This project is licensed under the MIT License.
