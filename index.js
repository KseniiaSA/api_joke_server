let http = require('http');
let path = require('path');
let fs = require('fs');

function getAllJokes(req, res){
    let dir = fs.readdirSync(path.join(__dirname, 'data'));
    let allJokes= []
    dir.forEach(joke_file=>{
        // console.log('joke_file='+joke_file)
        let joke= fs.readFileSync(path.join(__dirname,'data', joke_file), 'utf8');
        // console.log('joke='+joke)
        allJokes.push(JSON.parse(joke))
    })
    // res.writeHead(302, { Location: '/' });
    res.end(JSON.stringify(allJokes));
}

function getJoke(req, res){
let url = req.url.split('/')
let joke_file = url[url.length-1]+'.json'
console.log(joke_file)
    let joke= fs.readFileSync(path.join(__dirname,'data', joke_file), 'utf8');
    // console.log('joke='+joke)
     
    res.end(JSON.stringify(joke));
}

const server = http.createServer((req, res)=>{
    if(req.url == '/jokes' && req.method == 'GET'){
        console.log('jokes')
        getAllJokes(req, res)
    }
    if(req.url.includes('/joke/') && req.method == 'GET'){
        getJoke(req, res)
    }
})
server.listen(4444);
