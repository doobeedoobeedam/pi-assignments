SELECT
    pelanggan.id AS pelanggan_id,
    pelanggan.nama AS nama_pelanggan,
    pelanggan.email AS email_pelanggan,
    pelanggan.no_hp AS no_hp_pelanggan,
    AVG(
        produk.harga_produk * transaksi.quantity
    ) AS rata_rata_nominal_transaksi_pelanggan
FROM pelanggan
    JOIN transaksi ON pelanggan.id = transaksi.pelanggan_id
    JOIN produk ON transaksi.produk_id = produk.id
WHERE
    transaksi.tanggal_transaksi >= CURDATE() - INTERVAL 1 MONTH
GROUP BY
    pelanggan.id,
    pelanggan.nama,
    pelanggan.email;