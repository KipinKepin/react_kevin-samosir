const data = new Set([
    "Indonesia",
    "Jawa Barat",
    "Gajah",
    "Amerika Serikat",
    "California",
    "Singa",
    "Kanada",
    "Quebec",
    "Kanguru",
    "Perancis",
    "Provence-Alpes-Cote d'Azur",
    "Kuda",
    "Jepang",
    "Tokyo",
    "Kucing",
    "Spanyol",
    "Katalonia",
    "Kepiting",
    "Australia",
    "New South Wales",
    "Koala",
    "Brasil",
    "Rio de Janeiro",
    "Burung Kakatua",
    "China",
    "Shanghai",
    "Panda",
    "Italia",
    "Sicilia",
    "Gajah Laut"
]);

// Reading
data.forEach(item => {
    console.log(item);
});

// Searching
console.log("Is the set has data of 'China'?", data.has("China"));

// Insertion diawal
const newData = new Set(["Korea", ...data]);
console.log(newData);

// Insertion diakhir
console.log("Adding 'Ayam' to the set", data.add("Ayam"));

// Deletion diawal
console.log("Before : ", data);
data.delete("Indonesia")
console.log("After delete 'Indonesia' :", data);

// Deletion diakhir
console.log("Before : ", data);
data.delete("Ayam")
console.log("After delete 'Ayam' :", data);