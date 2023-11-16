// 1. Loop menampilkan teks 'User ke 1 - 100'

for (let i = 1; i <= 100; i++) {
    document.write(`User ke - ${i} <br>`);
}

// 2. FOR LOOP menambah nilai

let nilaiAwal = 0;

for (let i = 1; i <= 10; i++) {
    nilaiAwal += 2;
    console.log(`Nilai setelah pengulangan ke-${i}: ${nilaiAwal}`);
}

// 3. FOR LOOP ganjil-genap

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} adalah bilangan genap`);
    } else {
        console.log(`${i} adalah bilangan ganjil`);
    }
}

// 4. Menampilkan pop up

let counter = 0;

function tampilkanPopUp() {
    let result = confirm("Apakah kamu mau mengulang?");

    if (result) {
        counter++;
        tampilkanPopUp(); // Memanggil fungsi rekursif kalau 'OK' dipilih
    } else {
        alert(`Perulangan sudah dilakukan sebanyak ${counter} kali`); // Menampilkan jumlah perulangan saat 'Cancel' dipilih
    }
}

tampilkanPopUp();

// 5. Kuis

let jawaban = "";
const jawabanBenar = "Impact Byte";

while (jawaban !== jawabanBenar) {
    jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");

    if (jawaban === jawabanBenar) {
        alert("Selamat jawaban kamu benar! ^^");
    } else {
        alert("Maaf, jawaban kamu salah. Coba lagi! :(");
    }
}