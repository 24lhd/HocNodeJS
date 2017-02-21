
// truyền tham trị
function truyenThamTri(B){ // changeByValue
    B=2;
};
var A=10;

truyenThamTri(A);
console.log(A);

// truyền tham chiêu
// changg by reference
function truyenThamChieu(obj){ 
    obj.val=function(){

    }
    obj.val2="Tham chieu";
}
var o={};
truyenThamChieu(o);
console.log(o);