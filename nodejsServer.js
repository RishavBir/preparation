

                                // Create A server in NODEJS


var http = require("http")

http.createServer((req,res)=>{
  res.setHeader("content-type","text/plain")
  res.end("Hi myself Rishav")
}).listen(3000,"127.0.0.1",()=>{
console.log(`port is running successfully at http://${"127.0.0.1"}:${3000}/`);
})



