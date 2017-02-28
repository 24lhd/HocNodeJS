var express=require("express");
var bodyParser = require('body-parser')
var app=express();
var port=80;
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/",(req,res)=>{
    res.send("Xin Chao!!!")
})
// create application/json parser
// tạo ra 1 đối tượng json nhận dc dữ liệu gửi tới server từ client
var jsonParser = bodyParser.json()
/**
 * khi chưa có midware body-parser chúng ta không thể độc dữ liệu mà ng dùng port lên
 * ta cần phải chèn nó vào và sử dụng, ta thêm vào tham số thử 2
 */
app.post("/login",urlencodedParser,(req,res)=>{
    // vậy ta có thể độc dc dữ liệu ng dùng post lên
    res.send("well:"+req.body.usename);
    console.log(req.body.usename);
    console.log(req.body.password);
})
/**
 * tạo 1 view để ng dùng post dư liệu lên server
 */
app.get("/signin",(req,res)=>{
       console.log("yeu cau "+req.cookies);
    res.send(`
    <script src="https://code.jquery.com/jquery-1.12.4.min.js
         " type="text/javascript" charset="utf-8"></script>
        <form action="/login" method="post" accept-charset="utf-8">
		UserName<input type="text" name="usename" value="" placeholder="ten ng dung"><br>
		Password<input type="text" name="password" value="" placeholder="mat khau"><br>
		<input type="submit" name="submit" value="đăng nhập">
	</form>
    `);
    console.log(req.requestTime);
});
/**
 * xử lý dữ liệu ng dùng khi đấy dữ liệu json lên
 */
app.post("/loginjson",jsonParser,(req,res)=>{
    res.send("ok");
     console.log(req.body.id);
    console.log(req.body.name);
})
/**
 * tạo 1 view để ng dùng post bang json dư liệu lên server
 */

app.get("/signinjson",(req,res)=>{
    res.send(`
    <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
 
	<script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
</head>
<body>
	<script>
		$.ajax({
			type:"post",
			url:"/loginjson",
			data:JSON.stringify({
                id:"oaôs",
                name:"adwdawd"
            }),
			dataType:"json",
			contentType:"application/json"
		});		
	</script>
</body>
</html>
    `);
    
});

/**
 * query string 
 * -------------post:
 * - thì các tham số dữ liệu sẽ được chuyển đến phần thân của bản tin http, hoặc form data hoặc json
 * - phía client có thể tổng hợp và gửi dữ liệu chuyển đến server qua dạng json
 *  thì sẽ có content type application/json cũng nằm ở phần thê
 * -- dọc ta cần bóc tách phần thân của req http, express không hỗ trợ 
 * nên ta cần phải cài 1 cái midware: bodyparser..... 
 * --------------get:
 * dữ liệu các tham số nằm trên url
 */
app.listen(port,()=>{
    console.log("running");
})