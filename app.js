const {readFile,writeFile} = require('fs')
// a synchronous method requires a callback
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
}) 
// in node the first argument of readfile is always the error and the second one is always the result 