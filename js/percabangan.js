if (false) {
    console.log("dijalankan jika benar");
}else{
    console.log("dijalankan jika salah");
}
let kkm=80;
let nilai=prompt("nilaimu piro");
let max=100;
let min=0;

if (nilai <=max && nilai >=min) {
    if (nilai >= kkm){
    alert("lulus bos");
}else if(nilai >= 50){
   alert("remidi");
}else{
   alert("metu teko sekolah")
}
}else if(nilai < min){
        alert("kok sampe minus woi");
}else if(nilai > max){
    alert("kelebihan woi");
}

// if (nilai <=max && nilai >=min) {
//     if (nilai >= kkm){
//     console.log("lulus bos");
// }else if(nilai >= 50){
//     console.log("remidi");
// }else{
//     console.log("metu teko sekolah")
// }
// }else{
//     console.log("kamu error ya");
// }


