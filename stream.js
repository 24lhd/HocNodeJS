var fs=require("fs");
var opitions={// cấu hình định dạng đọc
    encoding :"utf8",
    highWaterMark :1024
}
var readable=fs.createReadStream(__dirname+"/hocnode.txt",opitions);
readable.on('data',function(chuck){ // bắt sự kiện data
    console.log(chuck.length);// sử dụng on dc vì nó là 1 events emitter
    writeable.write(chuck);
});

var writeable=fs.createWriteStream(__dirname+"/copy.txt");