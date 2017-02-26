var ffun=function(){
    console.log("Chạy hàm đầu tiên");
}
var sfun=function(){
    setTimeout(ffun,5000); // xử lý công viẹc 5s rồi ms gọi hàm callback
    console.log("Chạy hàm thứ 2");
}
sfun();
console.log("Chạy hàm thứ 2");
console.log("Chạy hàm thứ 2");
console.log("Chạy hàm thứ 2");
console.log("Chạy hàm thứ 2");
var ffun2=function(){
    console.log("Chạy hàm đầu tiên");
}
var sfun2=function(){
    setTimeout(ffun,5000); // xử lý công viẹc 5s rồi ms gọi hàm callback
    console.log("Chạy hàm thứ 2");
}
sfun2();

// ghi file và sau khi ghi xong thì đọc file
var fs=require("fs");
fs.writeFile(`readme.txt`,`xin chao tat ca`,(err)=>{
    var content=fs.readFile(__dirname+"/readme.txt",(err,data)=>{
        fs.writeFile(`readme2.txt`,data,(err)=>{})
        console.log(data);
    })
})
console.log("done");

















