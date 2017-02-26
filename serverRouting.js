 
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"||req.url=="/index.html"){
        // res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream("F:/HocNodeJS/hoccss.html").pipe(res);
    }
    
    else if(req.url=="/api"){
        // res.writeHead(200,{'Content-Type':'application/json'});  
        var obj={
            name:"Lê hông duong",
            age:21,
            que:"hai duong"
        }
        res.end(JSON.stringify(obj));
    }  else if(req.url=="/img"){
        res.writeHead(200,{'Content-Type':'image/webp'});  
       fs.createReadStream("F:/HocNodeJS/img.jpg").pipe(res);
         
    }else{
        //  res.writeHead(404,{'Content-Type':'text/plain'});  
         res.end("Không tìm thấy");
    }
    
}).listen(80,'192.168.1.101',()=>{  
  
    console.log('conected: http://192.168.1.101/');
}); 