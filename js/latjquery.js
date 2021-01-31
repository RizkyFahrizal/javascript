// $( document ).ready(function() {
//     console.log( "Siapp!" );
// });
$(function() {
    console.log( "SEYAP!" );
});

$(function () {
    $("#isi").html("<h1>Belajar jquery</h1>");

})

$("button").click(function (e) { 
    e.preventDefault();
    alert("Belajar javascript query");
});

$("#isi").mouseleave(function () { 
    alert("dauuur");
});