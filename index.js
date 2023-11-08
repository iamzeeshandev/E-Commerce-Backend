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