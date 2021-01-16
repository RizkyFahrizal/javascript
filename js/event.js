function tampil(b) {
    document.querySelector("p").innerText="belajar event "+b; //muncul ke html
    // a.innerText="belajar anjay";
    console.log("belajar event dom");//muncul ke konsol
}

judul.onclick=function () {
    document.querySelector(".isi").innerHTML="belajar pake id "; //muncul ke halaman html
    console.log("Belajar event dom pake id");//muncul ke konsol
}