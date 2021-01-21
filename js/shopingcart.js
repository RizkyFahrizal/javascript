let tblmenu=[
    {
        idmenu:10,
        idkategori:33,
        menu:"jeruk manis",
        gambar:"jeruk.jpg",
        harga:5000
    },
    {
        idmenu:11,
        idkategori:33,
        menu:"apel",
        gambar:"apel.jpg",
        harga:6000
    },
    {
        idmenu:12,
        idkategori:33,
        menu:"melon",
        gambar:"melon.jpg",
        harga:10000
    },
    {
        idmenu:13,
        idkategori:33,
        menu:"buah naga",
        gambar:"buahnaga.jpg",
        harga:11000
    },
    {
        idmenu:14,
        idkategori:46,
        menu:"pisang",
        gambar:"pisang.jpg",
        harga:3000
    },
    {
        idmenu:16,
        idkategori:31,
        menu:"burger",
        gambar:"burger.jpg",
        harga:15000
    },
];

let tampil= tblmenu.map(function (kolom){
    return `<div class="produk-content">
    <div class="img">
      <img src="img/${kolom.gambar}" />
    </div>
    <div class="title">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
     ${kolom.harga}
    </div>
    <div class="btn-beli">
        <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
    </div>`;
});

let isi=document.querySelector(".produk");
isi.innerHTML=tampil;

let btnbeli= document.querySelectorAll(".btn-beli > button");
let cart=[];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick=function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })

    };
};

console.log(cart);
