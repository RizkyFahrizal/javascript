function belajar() {
    let belajar="Saya belajar javascript";
    console.log(belajar);
}
belajar();

function persegi(panjang,lebar) {
    luas=panjang*lebar;
    console.log(luas);
}
persegi(7,9);

function lingkaran(r) {
    luas =3.14*r*r;
    return luas;
}

const tinggi=5;
let tabung=lingkaran(10)*tinggi;

console.log(tabung);