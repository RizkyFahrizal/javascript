const hari=2;
let hasil;

switch (hari) {
    case 1:
        hasil="Senin";
        break;
    case 2:
        hasil="Selasa";
        break;
    case 3:
        hasil="Rabu";
        break;
    case 4:
        hasil="Kamis";
        break;
    case 5:
        hasil="Jum'at";
        break;
    case 6:
        hasil="Sabtu";
        break;
    case 7:
        hasil="Minggu";
        break;

    default:
        hasil="Hari tidak ditemukan";
        break;
}

console.log(hasil);


const bln="Agustus";
let bulan;

switch (bln) {
    case "Januari":
        bulan=1;
        break;
    case "Febuari":
        bulan=2;
        break;
    case "Maret":
        bulan=3;
        break;
    case "April":
        bulan=4;
        break;
    case "Mei":
        bulan=5;
        break;
    case "Juni":
        bulan=6;
        break;
    case "Juli":
        bulan=7;
        break;
    case "Agustus":
        bulan=8;
        break;
    case "September":
        bulan=9;
        break;
    case "Oktober":
        bulan=10;
        break;
    case "November":
        bulan=11;
        break;
    case "Desember":
        bulan=12;
        break;

    default:
        bulan="Bulan tidak ditemukan";
        break;
}

console.log(bulan);