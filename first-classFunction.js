// dùng require sử dụng 1 module khác 
var say=require("./function");

// khai báo first-class function
function Duong(){
    this.ten="Lê Hồng Dương";
    this.tuoi="21";
}

// khởi tạo một thể hiện
var duong=new Duong();

// gọi hàm từ module "function"
say("Tôi tên là "+duong.ten+" và tôi "+duong.tuoi+" tuổi!");

// hàm
function ham(){
    say("Hàm đóng vai trò  là một tham số");
}

// tham số truyền vào là 1 hàm
function hamLamThamSo(f){
    f(); // hàm truyền vào
    return function(){ // kết quả trả về là một hàm
        say("Hàm đống vai trò là một kết quả trả về")
    }
}
var hamLaMotBien=function(){
    say(" Hàm đóng vai trò là một biến");
    var hamTraVe=hamLamThamSo(ham); // hàm đóng vai trò là một biến
    hamTraVe();
}
hamLaMotBien();

