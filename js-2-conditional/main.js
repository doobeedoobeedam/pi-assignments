// 1. IF...ELSE Start Up

let division = 'HR';

if (division === 'HR') {
    console.log('Tugas HR adalah melakukan rekrutmen untuk calon pegawai baru');
} else if (division === 'Marketing') {
    console.log('Tugas Marketing adalah merancang strategi pemasaran produk');
} else if (division === 'Development') {
    console.log('Tugas Development adalah mengembangkan produk atau layanan');
} else {
    console.log('Divisi tidak terdaftar');
}

// 4. Membandingkan dua nilai

let a = 5;
let b = 10;

if (a > b) {
    console.log('a lebih besar dari b');
} else if (a < b) {
    console.log('a lebih kecil dari b');
} else {
    console.log('a sama dengan b');
}

// 3. Switch Case Hari

let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = 'Senin';
    break;
  case 2:
    dayName = 'Selasa';
    break;
  case 3:
    dayName = 'Rabu';
    break;
case 4:
    dayName = 'Kamis';
    break;
    case 5:
    dayName = 'Jumat';
    break;
    case 6:
    dayName = 'Sabtu';
    break;
    case 7:
    dayName = 'Minggu';
    break;
  default:
    dayName = 'Hari tidak valid';
}

console.log(`Hari ke-${dayNumber} adalah ${dayName}`);


// 4. Switch Case Game

// let arah = prompt("Masukkan arah (UP/RIGHT/BOTTOM/LEFT):");

// switch (arah.toUpperCase()) {
//     case 'UP':
//         console.log("Karakter berjalan ke atas");
//         break;
//     case 'RIGHT':
//         console.log("Karakter berjalan ke kanan");
//         break;
//     case 'BOTTOM':
//         console.log("Karakter berjalan ke bawah");
//         break;
//     case 'LEFT':
//         console.log("Karakter berjalan ke kiri");
//         break;
//     default:
//         console.log("Arah yang dimasukkan tidak valid");
// }