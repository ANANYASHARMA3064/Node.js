const {readFile,writeFile} = require('fs')
// a synchronous method requires a callback
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first=result 
    readFile('./content/second.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const second=result
    writeFile(
        './content/result-async.txt',`here is the result :${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        }

)
}) 

// in node the first argument of readfile is always the error and the second one is always the result 

}) 
console.log('starting the next one')
 // code running asynchronously 