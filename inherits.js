var Emit=require("events");
var Util=require("util");
function SinhVien(){
    this.name="duong";
}
Util.inherits(SinhVien,Emit);
SinhVien.prototype.sayHello=function(data1,data2,data3,data4,data5){
    console.log(data1);
    this.emit("say",data1,data2,data3,data4,data5); //emitter.emit(eventName[, ...args]) sử dụng 1 mảng đnăgf sau để tuyền
}
var sv=new SinhVien();
sv.on("say",function(data1,data2,data3,data4,data5){
    console.log(data1,data2,data3,data4,data5+" gui loi chao toi moi nguoi");
});

sv.sayHello("Dương1","Dương2","Dương3","Dương4","Dương5");
