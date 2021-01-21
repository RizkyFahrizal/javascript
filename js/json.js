document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url="js/tblmenu.json";
    fetch(url)
    .then(response => response.json())
    .then(function (data) {
        let output ="<h1>Data Menu</h1><table><th>menu</th><th>harga</th><th>warna</th>";
        data.forEach(element => {
            output +=`<tr>
            <td>${element.menu}</td>
            <td>${element.harga}</td>
            <td>${element.warna[0]}</td>
            </tr>`
        });
        output+="</table>";
        document.querySelector("#isi").innerHTML=output;
    })
}



// let tblmenu=[
// {
//         "idmenu":10,
//         "idkategori":33,
//         "menu":"jeruk manis",
//         "harga":5000,
//         "warna":["merah","kuning","hijau"],
//         "stok":true,
//         "keterangan":null
// },
// {
//         "idmenu":10,
//         "idkategori":33,
//         "menu":"jeruk manis",
//         "harga":5000,
//         "warna":["merah","kuning","hijau"],
//         "stok":true,
//         "keterangan":null
// },
// ];

// console.log(tblmenu);