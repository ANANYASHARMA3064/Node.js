// modules
const names = require('./4-name')
console.log(names)
//module happens to be an object apparently 
const sayHi =require('./5-utils')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 
