var say=require("./function");
// khai bao object-literal
var Duong={
        Name:"Dương",
        Age:"21",
        Address:{
            City:"Hà Nội",
            Country:"Việt Nam"
        },
        diHoc:function(){
            console.log("di học");
        }
    };

say(Duong.Name);// truy cập thông qua .
say(Duong["Age"]);// truy cập thông qua [""]

Duong.diHoc();

