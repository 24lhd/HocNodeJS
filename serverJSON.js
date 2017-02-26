/**
 * trả về json để ứng dụng có thể sử dụng dc
 */
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});  
    var obj={
        name:"Lê hông duong",
        age:21,
        que:"hai duong"
    }
 
    // trong nodejs chúng ta có biến glabol (toàn cục) để xử lý dữ liệu json    
    res.end(JSON.stringify(obj));
     

}).listen(80,'192.168.1.101',()=>{ // khi server thực thi thành công thì nó sẽ thực thi callback này
    // hàm callback
    console.log('conected: http://192.168.1.101/');
}); 