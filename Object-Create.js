var Person={
    name:"",
    getName:function(){
        return this.name;
    }
}
var duong=Object.create(Person);
 // tạo một đối tượng mới kế thừa các phương thức và thuộc tính của Person
duong.name="duong";
console.log(duong.getName());