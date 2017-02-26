
class Nguoi{
    constructor(name,ho){
        this.ho=ho;
        this.name=name;
    }
    say(){
        console.log(`minh la ${this.name} ${this.ho}`);
    }
}
var duong=new Nguoi("le","duong");
duong.say();
console.log(duong.__proto__); // xem thể hiệm


// kế thừa extends
class SinhVien extends Nguoi{
    constructor(){
        super();
    }
}