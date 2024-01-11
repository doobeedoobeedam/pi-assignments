CREATE TABLE
    IF NOT EXISTS `pelanggan` (
        `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        `nama` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `alamat` TEXT NOT NULL,
        `no_hp` VARCHAR(100) NOT NULL UNIQUE,
        PRIMARY KEY (`id`)
    );