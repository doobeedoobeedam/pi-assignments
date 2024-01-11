CREATE TABLE
    IF NOT EXISTS `produk` (
        `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        `kode_produk` VARCHAR(255) UNIQUE NOT NULL,
        `nama_produk` VARCHAR(255) NOT NULL,
        `harga_produk` BIGINT UNSIGNED NOT NULL,
        `stok` BIGINT UNSIGNED NOT NULL,
        `kategori_id` BIGINT UNSIGNED NOT NULL,
        `tanggal_ditambahkan` TIMESTAMP,
        PRIMARY KEY (`id`),
        FOREIGN KEY(`kategori_id`) REFERENCES `kategori`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
    );