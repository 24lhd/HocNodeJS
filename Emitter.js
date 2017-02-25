function Emitter(){ // tạo một đối tượng EventEmitter
    this.events={}; // với thuộc tính đầu tiên là obj rỗng
}
Emitter.prototype.on=function(type,listener){ // function on để dki event
    this.events[type]=this.events[type]||[]; // với mỗi event  ta sẽ có thể thực thì nhiều đồi tượng nhiều function sử dụng 1 mảng
    this.events[type].push(listener); // đẩy function cần thực thi khi sự kiện type được xảy ra
    console.log(this.events);
    
}
Emitter.prototype.emit=function(type){ // khi có sự kiện ta cần kiểm xoát chúng để thực thi bằng cách gọi function emit và tham số là sự kiện xảy ra
    if(this.events[type]){ // tìm sự kiện
        this.events[type].forEach(function(listener) { // thực thi các function đã đăng ký với type bằng forEach
            listener();
        });
    }
}
module.exports=Emitter;