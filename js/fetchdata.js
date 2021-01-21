document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url="http://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        out = "<ul>";
        data.forEach(element => {
            out += `<li>${element.title}<li>`   
        });
        out+="</ul>";
        document.querySelector("#isi").innerHTML=out;
    })
}
