// const http = require('http')

// // const server = http.createServer((req, res) => {
// //   res.end('Welcome')
// // })

// // Using Event Emitter API
// const server = http.createServer()
// // emits request event
// // subcribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//   res.end('Welcome')
// })

// server.listen(8080)
const {createReadStream} =require('fs');
const stream = createReadStream('../content/big.txt',{
  highWaterMark:9000,
  encoding: 'utf-8'
});
stream.on('data',(result)=>{
  console.log(result )
})
stream.on('error',(err)=>console.log(err ))
