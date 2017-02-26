var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'}); // trả về mã lỗi
    var html=fs.readFileSync("F:/HocNodeJS/hoccss.html",'utf8')// gửi về trình duyệt file html
    res.end(html);// cho trình duyệt hiển thị
   
    // console.log( res.getHeader("duong"));
     console.log('192.168.1.101');

}).listen(80,'192.168.1.101'); // bó cho hệ điều hành biết mk muốn khỏi tạo 1 server và chạy   