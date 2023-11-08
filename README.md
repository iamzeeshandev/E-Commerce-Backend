# E-Commerce-Backend

Create a NodeJS Project:
	`mkdir rift-com-apis`
	`cd rift-com-apis`
	`npm init`
	Answer the following question
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See `npm help init` for definitive documentation on these fields
and exactly what they do.
Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
package name: (rift-com-apis)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: coderift
license: (ISC)
About to write to E:\Zee ~ 2023\Dev ~ 2023\MERN Dev\CodeRift\rift-com-apis\package.json:
{
  "name": "rift-com-apis",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "coderift",
  "license": "ISC"
}
Is this OK? (yes)

	Project is created Successfully
	Run this command to set all default setting `npm init –yes`
	Run Command `Code .` to open created project in the VS Code.
So we created NodeJS project successfully, we can set package.json file created with some setting. Now create a index.js file which is our primary or entry file, then run “npm start” command to run the file.

What is NodeJS? & it’s core functions which will we use?
	It is a run time environment of JS
	Why NodeJS? Initially JS is created to run inside browsers (client), so if we want to build a backend, there is need arise to run JS outside (browser)
	Created by Rayan Dahl in 2009.
How NodeJS created?
	Every browser have it’s own engine to run JS code e.g., Chrome – V8, Explorer – Chakra, Safari – Spider 

// The node:os module provides operating system-related utility methods and properties. It can be accessed using:
const os = require('os')
// The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path')

console.log("Version", os.version())
console.log("Free Memory", os.freemem())
console.log("Free Memory Home", os.homedir())
console.log("Free Memory Machine", os.platform())

console.log("Path", path.dirname('/user/dell'))

console.log("Welcome to E-Commerce AppLication", os.freemem())


