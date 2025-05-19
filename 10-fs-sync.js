const { readFileSync,writeFileSync }=require('fs')
const first= readFileSync('./content/first.txt','utf-8')
const second= readFileSync('./content/second.txt','utf-8') 
console.log(first,second)
//The fs module (short for File System) in Node.js lets you interact with the file system — like reading/writing/editing files and folders.
writeFileSync(
    './content/result-sync.txt',
    `Here is the result :${first},${second}`,{flag:'a '}

)
