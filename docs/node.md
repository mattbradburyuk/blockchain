# node.js and npm

## Install

Follow instructions for windows at: https://nodejs.org/en/

## Tutorials

Lots of stuff on the web, I use this site to get a basic knowledge: http://www.tutorialspoint.com/nodejs/


## npm (Node Package Manager)

'npm' is the node package manager, check that it is installed with 

```
$ npm --version
```

See https://www.npmjs.com for packages that can be installed, for example you can search for web3 which will take you to https://www.npmjs.com/package/web3 This will have version info, build status, install info,  links to documentation etc...


When installing modules, if you want the node modules to be available everywhere on your machine use the global flag: 

```
$ npm install -g <package_name>
```

If you want to only install the dependencies on your local project, use a package.json file (below)

## package.json (installing dependencies)

Node programs tend to be dependent on many modules, some of these are in the core library, some of them need bringing in.

This is done via a package.json file in your project root, eg: 

```
{
  "name": "setup",
  "version": "0.0.1",
  "main": "tx_firer.js",
  "dependencies": {
    "command-line-args": "^2.1.6",
    "jayson": "^2.0.0",
    "web3": "^0.15.2"
  }
}
```

You can then run:

```
$ npm install
```
...and it will bring in all the dependencies into the local project
 
 
 