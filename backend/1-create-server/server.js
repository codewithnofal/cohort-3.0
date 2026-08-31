// esm 
let http = require('http');


// creating a server
let server = http.createServer((req,res) => {
    res.end("server running successfully...")
})

// listen to a server
server.listen(3000, () => {
    console.log("server is running on port 3000")
})



