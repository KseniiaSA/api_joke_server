let http = require('http');
let path = require('path');
let fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url == '/jokes' && req.method == 'GET'){
        console.log('jokes')
    }
})

server.listen(4444);