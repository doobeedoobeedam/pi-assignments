### Apa itu React?
React adalah library JavaScript yang dipakai untuk membangun UI yang interaktif. Dikembangkan oleh Facebook, React memungkinkan kita untuk membuat aplikasi web dengan komponen-komponen UI yang bisa diatur dengan mudah.

### Apa keunggulan React?
- Dengan React, kita bisa membuat bagian-bagian kecil dari UI yang bisa kita pakai kembali.
- React menggunakan Virtual DOM, sebuah konsep yang memungkinkan aplikasi untuk memperbarui hanya bagian-bagian kecil dari tampilan yang berubah, daripada me-load seluruh halaman. 
- Komponen-komponen React dapat digunakan kembali, sehingga mempercepat proses pengerjaan.
- JSX memungkinkan kita untuk menulis HTML di dalam JavaScript, kode kita jadi clean-code dan mudah dimengerti.

### Apa itu SPA pada React?
SPA (Single Page Application) adalah jenis aplikasi web yang memuat satu halaman saja dan merender konten baru secara dinamis ketika pengguna berinteraksi dengan aplikasi, tanpa me-load seluruh halaman. 

### Apa itu state dan props? Apa perbedaannya?
- State adalah (semacam) sifat atau kondisi yang dimiliki oleh sebuah komponen di React. State menentukan perilaku dan bagaimana sebuah komponen akan terlihat. State hanya bisa diubah oleh komponen itu sendiri dan bisa berubah seiring waktu.
- Props (singkatan dari properties) adalah (semacam) "pesan" yang dikirim dari komponen induk ke komponen anaknya. Props ini bersifat "read-only" dan tidak bisa diubah oleh komponen yang menerimanya.

Jadi, state dikendalikan dan diubah oleh komponen itu sendiri, sementara props dikirim dari komponen lain. Lalu, state bisa berubah-ubah seiring waktu, sementara props hanya bisa dibaca dan tidak bisa diubah oleh komponen yang menerimanya.

### Kapan harus menggunakan state dan props? Berikan contoh studi kasus
Kita menggunakan state ketika sebuah komponen perlu mengatur dan memperbarui datanya sendiri. Misalnya, pada button like di Instagram, kita butuh state untuk menghitung berapa banyak like yang sudah diberikan dan memperbarui tampilan ketika button itu ditekan (jadi red-fill).

Sementara itu, props digunakan untuk mengirimkan informasi dari komponen induk ke anaknya. Misalnya, di sebuah blog, komponen "Post" mungkin menerima props seperti judul, excerpt, isi konten, dan tanggal dari komponen "BlogList" yang memuat daftar semua postingan blog. 

### Apa itu state management dan kapan harus menggunakannya?
State management adalah proses pengelolaan dan penyimpanan data aplikasi secara global agar bisa diakses dan diubah oleh berbagai komponen di dalam React. Dimana state management berguna ketika aplikasi kita memiliki banyak komponen yang memerlukan akses ke data yang sama.

Kita menggunakan state management ketika:
- Aplikasi kita memiliki banyak komponen yang perlu berbagi dan memanipulasi data yang sama.
- Data yang dibutuhkan oleh berbagai komponen tersebar di seluruh aplikasi dan sulit untuk dikelola jika disimpan secara lokal di masing-masing komponen.

### Apa itu ORM/ODM?
ORM (Object-Relational Mapping) dan ODM (Object-Document Mapping) adalah teknik atau alat yang digunakan untuk menghubungkan antara model dalam sebuah aplikasi dengan struktur data di database.

ORM digunakan pada aplikasi yang menggunakan database relasional seperti MySQL, PostgreSQL, dan sejenisnya, sedangkan ODM digunakan pada aplikasi yang menggunakan database non-relasional (NoSQL) seperti MongoDB.

### Apa perbedaan SQL dan NoSQL?
Perbedaan utama antara SQL dan NoSQL terletak pada cara penyimpanan dan manipulasi data dalam database.

SQL adalag jenis database relasional yang menggunakan tabel untuk menyimpan data dan menggunakan query bahasa SQL untuk mengakses dan mengelola data. Database SQL memiliki skema yang terstruktur, di mana setiap tabel harus memiliki skema yang sudah ditentukan sebelumnya.

Sementara itu, NoSQL adalah jenis database non-relasional yang tidak membutuhkan struktur tabel yang tetap. NoSQL bisa mengelola penyimpanan data dalam berbagai bentuk, seperti dokumen, grafik, atau kolom, dan biasanya digunakan untuk aplikasi yang membutuhkan skala besar.