function coba() {
    console.log("coba eventlistener");
    a=document.querySelector(".isi");
    a.innerHTML=("belajar eventlistener");
}

// judul.addEventListener("click",coba);
// judul.onmouseover=coba;
judul.onmouseover=function() {
    console.log("mencoba anonymous function");
}