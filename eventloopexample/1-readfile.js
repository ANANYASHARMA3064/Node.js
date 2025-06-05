const fs = require('fs')
const path = require('path')

const filePath = '/Users/ananyasharma/Desktop/nodejs/content/first.txt'

fs.readFile(filePath, 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})

console.log('starting next task')
