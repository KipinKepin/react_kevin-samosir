# Event Handling

## Poin Penting
1. Event handling adalah metode untuk menangani sebuah event yang diberikan user kepada komponen
2. Contoh event adalah clipboard, form, mouse, generic
3. Stateless Component :
    - Tidak tahu tentang aplikasi
    - Tidak ada data fetching
    - Tujuan utamanya adalah untuk visualisasi
    - Dapat digunakan kembali
    - Hanya berkomunikasi dengan parent

    Stateful Component :
    - Mengerti tentang aplikasi
    - Terdapat data fetching
    - Berinteraksi dengan aplikasi
    - Tidak dapat digunakan kembali
    - Meneruskan data ke child