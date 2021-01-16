let coba= function(){ return "coba function" }
let buah=["jeruk","apel","mangga",100,coba(),(tes=()=>"hasil dari arrow function"),function nama() {return "hai rizal"}];
console.log(buah);
console.log(buah[0]);

for(let row in buah){
    console.log(buah[row]);
}
console.log(buah[5]());
console.log(buah[6]());