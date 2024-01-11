INSERT INTO
    `transaksi` (
        `id`,
        `kode_transaksi`,
        `quantity`,
        `produk_id`,
        `pelanggan_id`,
        `tanggal_transaksi`
    )
VALUES (NULL, 'T011', 2, 1, 11, NOW()), (NULL, 'T012', 1, 18, 11, NOW()), (NULL, 'T013', 1, 5, 11, NOW());