// 1. Menampilkan data diri

console.log("Nama: Kusuma Wecitra");
console.log("Asal Daerah: Kota Depok, Jawa Barat");
console.log("Tanggal Lahir: 4 September 2003");
console.log("Umur: 20 tahun");
console.log("Posisi Pekerjaan: Full Stack Intern");

// 2. Interaksi dengan pengguna

// let namaUser = prompt("Masukkan nama Anda:");
// let asalNegara = prompt("Masukkan asal negara Anda:");

// // Konfirmasi data
// let konfirmasiData = confirm(`Apakah data yang Anda isi sudah benar?\nNama: ${namaUser}\nAsal Negara: ${asalNegara}`);

// // Memberikan respons terhadap konfirmasi
// if (konfirmasiData) {
//     alert("Terima kasih sudah mengisi form!");
// } else {
//     alert("Silakan isi kembali form dengan data yang benar.");
// }

// 3. Menampilkan data diri dalam variable

let dataDiri = {

    nama: 'Kusuma Wecitra',
    asalDaerah: 'Kota Depok, Jawa Barat',
    tanggalLahir: '4 September 2003',
    umur: '20 tahun',
    posisiPekerjaan: 'Full Stack Intern'
};

console.log(dataDiri);

// 4. Operasi matematika
let tambah = 10 + 10; // Operasi penjumlahan
let kali = 20 * 20; // Operasi perkalian
let bagi = 30 / 30; // Operasi pembagian
let modulus = 40 % 2; // Operasi modulus

console.log("10 + 10 = ", tambah);
console.log("20 x 20 = ", kali);
console.log("30 : 30 = ", bagi);
console.log("40 % 2 = ", modulus);