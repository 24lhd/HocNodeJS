var fs=require("fs");
var opitions={// cấu hình định dạng đọc
    encoding :"utf8",
    highWaterMark :16*1024
}
var readable=fs.createReadStream(__dirname+"/hocnode.txt",opitions);
var writeable=fs.createWriteStream(__dirname+"/copyPipe.txt");
readable.pipe(writeable);
