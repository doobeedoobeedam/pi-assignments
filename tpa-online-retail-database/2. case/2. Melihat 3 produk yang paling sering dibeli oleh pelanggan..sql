SELECT
    produk.kode_produk,
    produk.nama_produk,
    COUNT(transaksi.id) AS total_pembelian_produk
FROM transaksi
    JOIN produk ON transaksi.produk_id = produk.id
GROUP BY produk.id
ORDER BY
    total_pembelian_produk DESC
LIMIT 3;