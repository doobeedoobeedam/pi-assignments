CREATE TABLE
    IF NOT EXISTS `transaksi`(
        `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        `kode_transaksi` VARCHAR(255) NOT NULL UNIQUE,
        `quantity` BIGINT UNSIGNED NOT NULL,
        `produk_id` BIGINT UNSIGNED NOT NULL,
        `pelanggan_id` BIGINT UNSIGNED NOT NULL,
        `tanggal_transaksi` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        FOREIGN KEY(`produk_id`) REFERENCES `produk`(`id`) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY(`pelanggan_id`) REFERENCES `pelanggan`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
    );