DELIMITER $$

CREATE TRIGGER kurangi_stok_produk AFTER INSERT ON 
transaksi FOR EACH ROW 
BEGIN 
	DECLARE stok_saat_ini BIGINT;
	SELECT stok INTO stok_saat_ini
	FROM produk
	WHERE id = NEW.produk_id;
	UPDATE produk
	SET
	    stok = stok_saat_ini - NEW.quantity
	WHERE id = NEW.produk_id;
END$$ 

DELIMITER ;