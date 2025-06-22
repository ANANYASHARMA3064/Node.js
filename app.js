const {readFile,writeFile, read} = require(  'fs').promises
const util=require('util');
const readFilePromise=util.promisify(readFile)
const writeFilePromise =util.promisify(writeFile)
// const getText =(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if (err){
//                 reject(err)
//     }
//             else{
//                 resolve(data) 
//     }
// })
//     })
// }
// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))
const start = async()=>{
    try{
            const first = await readFile('./content/first.txt')
            const second= await readFile('./content/second.txt')
            await writeFilePromise('./content/something.txt',`this is awesome ${first},${second}`,{flag:'a'}) 
            console.log(first,second)


    }
    catch(error){
        console.log()
    }
    
}
start()