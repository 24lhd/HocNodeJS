var Emitter=require("./Emitter");
 var emitter=new Emitter();
emitter.on("diemkem",function(){ // đăng kí sự kiện diemkem với function
    console.log("Bi diem kem");
});
emitter.on("diemkem",function(){// đăng kí sự kiện diemkem với function
    console.log("co diem kem");
});
var diem=[10,4,10,5];

for(var d of diem){
    if(d<5){
        console.log("diem thap");
        emitter.emit("diemkem"); // gọi sự kiện đểm kém để thực thi
    }
}