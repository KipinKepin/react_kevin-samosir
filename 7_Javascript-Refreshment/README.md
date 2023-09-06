# Javascript Refreshment

## 3 Poin Penting
1. Javascript adalah Bahasa Pemrograman yang High-Level, Scripting, Untyped, dan Interpreted. Javascript adalah salah satu bahasa tingkat tinggi, yang dimana artinya adalah bahasa yang lebih mudah dimengerti oleh manusia. Javascript adalah bahasa yang mudah untuk dipelajari tetapi susah untuk dikuasai
2. Declaration adalah proses pembuatan variabel untuk menyimpan data. Ada 3 cara untuk mendeklarasikan variabel pada Javascript, yaitu var, let, dan const.
|                |   var    |   let   |  const  |
|----------------|----------|---------|---------|
|  Declaration   |   yes    |   yes   |   no    |
| Redeclaration  |   yes    |   no    |   no    |
|  Reassignment  |   yes    |   yes   |   no    |
|    Hoisting    |   yes    |   no    |   no    |
|  Global Scope  |   yes    |   yes   |   yes   |
| Function Scope |    no    |   no    |   no    |
|  Block Scope   |   yes    |   no    |   no    |
3. Destructuring adalah ekspresi dari Javascript yang memungkinkan untuk menyalin nilai dari array atau properti dari object kedalam variable yang berbeda.
4. Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya sesederhana mungkin sesuai dengan kegunaannya masing masing. Method pada array Javascript terdiri dari :
    - Concat
    - Map
    - Foreach
    - Slice
    - Filter
    - Reduce
    - dll
5. Function digunakan untuk melakukan serangkaian komputasi atau prosedur yang dapat digunakan berulang kali
6. Classes
    - Class adalah prototype dari object yang akan dibuat.
    - Constructor adalah method dalam class yang akan selalu terpanggil pertama kali ketika membuat object.
    - Attributes adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class.
    - Extends digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan method kelas induk
7. Async Wait
    - Synchronous mengeksekusi setiap perintah satu per satu sesuai urutan code.
    - Asynchronous mengeksekusi code tidak berdasarkan urutan code, melainkan berdasarkan waktu proses.
    - Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain
    - Promise adalah object yang mempresentasikan keberhasilan atau kegagalan pada suatu event yang asynchronous
    - Await adalah keyword pada asynchronous function yang berfungsi menghentikan eksekusi sambil menunggu promisenya selesai
8. DOM adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi object. Selection pada DOM terdiri dari : 
    - getElementById() -> Element
    - getElementByTagName() -> HTMLCollection
    - getElementByClassName() -> HTMLCollection
    - querySelector() -> Element
    - querySelectorAll() -> Nodelist
9. Selain selection, pada DOM juga dapat dilakukan manipulation dan event