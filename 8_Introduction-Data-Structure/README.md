# Introduction Data Structure

## Poin Penting
1. Struktur data adalah cara menyimpan dan mengorganisir data/value/elemen didalam memori komputer. Struktur data digunakan untuk mengatur kualitas code yang digunakan dan untuk membuat code lebih efisien
2. Struktur data dasar pada JS meliputi array dan set. Operasi data struktur terdiri dari Read, Search, Insert, dan Delete
3. Reading adalah melihat nilai apa yang terkandung pada suatu array. Reading merupakan operasi yang paling efisien karena hanya membutuhkan 1 step. Pada reading, dapat langsung melompat ke nilai tertentu. Dapat dilakukan dengan mencari data dengan index ke ?
4. Searching dilakukan untuk mencari apakah nilai tertentu terdapat pada array. Tidak dapat melompat langsung ke nilai tertentu. Jumlah stepsnya adalah sebanyak panjang arraynya. Dapat dilakukan dengan indexOf()
5. Insertion adalah proses penambahan value pada array. Dapat dilakukan dengan menambahkan value dari depan, tengah, maupun belakang array. Hal yang paling efektif adalah menambahkan pada bagian belakang array. Dapat dilakukan dengan push(), slice(), dan unshift()
6. Deletion adalah proses menghilangkan/menghapus value dari array. 1 step digunakan untuk deletion dan (array.length - 1) step digunakan untuk menggeser data. Dapat dilakukan dengan pop() dan shift()
7. Pada set, tidak diizinkan terjadinya duplikasi data. Searching dilakukan dengan forEach(), searching dilakukan dengan has(), deletion dilakukan dengan delete(), insertion dilakukan dengan add()