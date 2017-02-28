var express=require("express");
var app=express();
var port=80;

var cookieParser = require('cookie-parser')

/**
 * tự định nghĩa 1 middware
 * 
 */
app.use("/",function(req,res,next){
   
    console.log(req.url);
    req.requestTime=new Date();
    next();
});
/**
 * 1 middware
 * express static file
 * /assets tất cả các yêu cầu sẽ được hiển thị trên đây sẽ dc lấy thay tên: public
 */
app.use("/assets",express.static(__dirname+"/public"));
app.use(cookieParser())


/**
 * định tuyến các ứng dụng
 */
app.get("/",(req,res)=>{
       console.log("yeu cau "+req.cookies);
    res.send(`
        <link rel="stylesheet" type="text/css" href="/assets/style.css">
        <h1>xin chao</h1>
    `);
    console.log(req.requestTime);
});

app.get("/api",(req,res)=>{
    res.json({
        name:'Duong'
    });
    console.log(req.requestTime);
});

/**
 * định tuyến bằng paramter
 */
app.get('/users/:userId', function (req, res) {
    res.cookie("usename",req.params.userId)
  res.send(req.params.userId)
})
app.listen(port,()=>{
    console.log("running");
})
