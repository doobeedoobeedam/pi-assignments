# Kusuma Wecitra

## Apa perbedaan dari procedural, conditional dan looping?
- **Procedural**: Merujuk pada serangkaian instruksi yang dieksekusi dalam urutan tertentu untuk menyelesaikan suatu tugas atau fungsi tertentu. Biasanya terdiri dari urutan langkah-langkah.
- **Conditional**: Digunakan untuk mengevaluasi suatu kondisi (true atau false), termasuk statement seperti if, else if, else.
- **Looping**: Digunakan untuk mengulangi serangkaian instruksi sampai kondisi tertentu terpenuhi.

## Kapan harus menggunakan looping?
- Ketika terdapat tugas atau operasi yang perlu diulang sampai kondisi tertentu tercapai.
- Saat ingin menghindari penulisan ulang kode yang sama untuk setiap iterasi atau kejadian yang berulang.

## Sebutkan 3 looping yang dapat digunakan dan fungsinya?
- **For**: Digunakan untuk melakukan iterasi sejumlah tertentu atau berdasarkan kondisi yang telah ditentukan sebelumnya.
    ```bash
        for (let i = 0; i < 5; i++) {
            // Melakukan sesuatu sebanyak 5 kali
        }
    ```
- **While**: Melakukan iterasi selama kondisi yang ditentukan terpenuhi.
  ```bash
        let x = 0;
        while (x < 5) {
            // Melakukan sesuatu selama x kurang dari 5
            x++;
        }
    ```
- **Do...While**: Mirip kayak while, tapi melakukan satu iterasi setidaknya sekali sebelum mengevaluasi kondisi.
    ```bash
        let y = 0;
        do {
            // Melakukan sesuatu minimal sekali
            y++;
        } while (y < 5);
    ```