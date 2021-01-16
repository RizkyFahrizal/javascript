let a=true;
let b=false;
let c=true;
let d=false;

//OR : bernilai true jika ada salah satunya true
console.log(a  || b);
console.log(b  || d);
console.log(b  || d || a);

//AND : jika salah satu false maka bernilai false
console.log(a  && b);
console.log(a  && b && c);

//pembanding
let x=5;
let y=2;

//lebih besar
console.log(x>y);
//lebih kecil
console.log(x<y);
//sama dengan
console.log(x==y);
//lebih besar sama dengan
console.log(x>=y);
//lebih kecil sama dengan
console.log(x<=y);

//identik : tipe data dan isinya/nilai sama
let lima="5";
let limo=5;
console.log(lima === limo); 
