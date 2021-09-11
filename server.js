const http=require('http')
const fs=require('fs')
const lodash=require('lodash');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-type', 'text/html')
    let path='./view/';
    num= lodash.random(1,6);
    const greet = () => {
        console.log("bini");
    }
     greet();
greet();
    console.log(num);
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode=200
            break;
        case '/about':
            path +='about.html';
            res.statusCode=200
             break;
            case '/about-eth':
                res.statusCode=301
                res.setHeader('Location','/about')
               res.end();
                 break;
       default:
            path +='404.html';
            res.statusCode=404
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.end(data)
        }
    })
    
})
server.listen(3000,'localhost',()=>{
    console.log("requesting port on 3000")
})