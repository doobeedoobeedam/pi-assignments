SELECT kategori.nama_kategori, COUNT(produk.id) AS jumlah_produk
FROM produk
LEFT JOIN kategori ON produk.kategori_id = kategori.id
GROUP BY kategori.id, kategori.nama_kategori ORDER BY jumlah_produk DESC;