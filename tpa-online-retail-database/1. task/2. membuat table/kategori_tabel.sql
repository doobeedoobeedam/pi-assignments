CREATE TABLE
    IF NOT EXISTS `kategori`(
        `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        `nama_kategori` VARCHAR(255) NOT NULL,
        `deskripsi` TEXT NOT NULL,
        `slug` VARCHAR(255) UNIQUE NOT NULL,
        PRIMARY KEY (`id`)
    );