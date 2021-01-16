let fungsi= function (nama) {
    console.log("belajar function " +nama);
};

fungsi("asik");

let coba=(nama)=> {
    console.log("belajar function " +nama);
};

coba("barong");

//cara biasa
let tambah=function (a,b) {
    return a+b;
};
console.log(tambah(10,5));

//cara arrow function
let tambeh=(c,d)=>c+d;
console.log(tambeh(20,5));

let lagi=()=>console.log("coba lagi");
lagi();

let tryy = ()=>{
    console.log("baris satu");
    console.log("baris dua");
    console.log("baris tiga");
}
tryy();

let nilaimu=80;
let uji=nilaimu<80 ? ()=> (predikat="gagal") :()=>(predikat="lulus");
console.log(uji());