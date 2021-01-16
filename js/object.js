const objek={
    nama :"Rizall",
    telpon:087869987678,
    sekolah:["SMKN 2 Buduran","XI-RPL","18"],
    alamat:function() {
      return "Kahuripan Nirwarna Blok CA 15 No 23a"; 
    },
    kepastian:true,
    "tulis aja":197812
};
// console.log(objek);
console.log(objek.nama);
console.log(objek.telpon);
console.log(objek.sekolah[0]);
console.log(objek.alamat());
console.log(objek.kepastian);
console.log(objek["tulis aja"]);