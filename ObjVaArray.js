// Đối tương
console.log("đối tượng :");
var obj={
    hello:"hello",
    sayHello:function(){
        console.log(this.hello);
    },
};
// các cấchs truy cập thuộc tính:
// cách dùng . với thuộc tính
console.log(obj.hello);
// cách dùng . truy cập function
obj.sayHello();
// cách dùng [] với thuộc tính
var hello="hello";
// cách dùng [] truy cập function
console.log(obj[hello]);
obj["sayHello"]();

// Mảng array:
console.log("mang :");
var mang=[1,2,3,"duong",function(){return "run function"}];
mang.push(obj);
//cách truy cập vào các phần tử của mảng bằng chỉ số []
console.log(mang[0]);
console.log(mang[1]);
console.log(mang[3]);
console.log(mang[4]());
console.log(mang[5]);


//cách truy cập vào các phần tử của mảng bằng forEach
console.log("------------------------mang : forEach");
mang.forEach(function(item){
    console.log(item);
});





