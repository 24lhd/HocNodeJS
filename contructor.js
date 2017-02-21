
// first class function
function person(name,age){
    this.name=name;
    this.age=age;
}

// mở rộng thêm một thuộc tính mới đóng vai trò là 1 hàm bằng prototype
person.prototype.dihoc=function(){
    console.log("di hoc");
}
person.prototype.getName=function(){
    return this.name;
}
person.prototype.getAge=function(){
    return this.age;
}
person.prototype.getQue=function(){
    return this.que;
}
// mở rộng thêm một thuộc tính mới đóng vai trò là 1 biến bằng prototype
person.prototype.que="Hai Duong";

function user(name){
    this.name=name;
}
// mở rộng thêm một thuộc tính mới đóng vai trò là 1 đối tượng bằng prototype
user.prototype.p=new person("Dương","21");

// khỏi tạo các thể hiện
var per=new person("KEn","20");
var us=new user("duong");
// gọi và truy xuất
console.log(per.age);
console.log(us.p);






