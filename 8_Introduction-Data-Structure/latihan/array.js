const data = [
    "Indonesia",
    "Jawa Barat",
    "Singapura",
    "New York",
    "Australia",
    "Queensland",
    "Kanada",
    "Ontario",
    "Brazil",
    "Sao Paulo",
    "Jepang",
    "Tokyo",
    "Perancis",
    "Provence-Alpes-Cote d'Azur",
    "Spanyol",
    "Andalusia",
    "China",
    "Guangdong",
    "Italia",
    "Sicilia",
    "Argentina",
    "Buenos Aires",
    "Meksiko",
    "Distrito Federal",
    "Kanguru",
    "Singa",
    "Koala",
    "Gajah",
    "Kuda",
    "Sapi",
];

// Reading
console.log("Reading : \n", "Index 4 :", data[4]);

// Searching
console.log("Searching : \n", "Index of Brazil :", data.indexOf("Brazil"));

// Insertion diawal
console.log("Before :\n", data);
data.unshift("Korea")
console.log("Setelah Insertion diawal :\n", data);

// Insertion diakhir
console.log("Before :\n", data);
data.push("Ayam")
console.log("Setelah Insertion diakhir :\n", data);

// Deletion diawal
console.log("Before :\n", data);
data.shift();
console.log("Setelah Deletion diawal :\n", data);

// Deletion diakhir
console.log("Before :\n", data);
data.pop();
console.log("Setelah Deletion diakhir :\n", data);
