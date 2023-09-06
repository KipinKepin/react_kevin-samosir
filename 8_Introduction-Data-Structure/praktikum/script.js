const product_name = document.querySelector("#product_name");
const price = document.querySelector("#price");
const additional = document.querySelector("#additional");
const name_warn = document.querySelector(".name_warn");
const tombol = document.querySelector(".tombol");
const label_name = document.querySelector(`label[for=${product_name.id}]`).innerText;
const label_price = document.querySelector(`label[for=${price.id}]`).innerText;

const dropdownItems = document.querySelectorAll('.dropdown-item');

const radioButtons = document.querySelectorAll('.form-check-input');

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

const tableBody = document.getElementById('table-body');

// all radio button
const radio1 = document.querySelector("#exampleRadios1");
const radio2 = document.querySelector("#exampleRadios2");
const radio3 = document.querySelector("#exampleRadios3");

function updateButtonState() {
    if (product_name.value.length === 0 || price.value.length === 0) {
        tombol.disabled = true;
    } else {
        tombol.disabled = false;
    }
}

product_name.addEventListener("keyup", function () {
    updateButtonState();
    if (!specialChars.test(product_name.value)) {
        if (product_name.value.length > 25) {
            tombol.disabled = true
            name_warn.innerHTML = "*Last Name must not exceed 25 characters."
            product_name.style.border = "2px solid red"
            name_warn.style.color = "red";
        }
        else {
            name_warn.innerHTML = ""
            product_name.style.border = ""
        }
    }
    else {
        product_name.style.border = "2px solid red"
        tombol.disabled = true
        name_warn.innerHTML = "*Name must not contain symbols."
        name_warn.style.color = "red"
    }
})

price.addEventListener("input", function () {
    updateButtonState();
});

updateButtonState();

let dropdownValue;
let radioValue;

dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        dropdownValue = this.getAttribute('data-value');
        document.getElementById('dropdownMenuButton1').textContent = dropdownValue;
    });
});
radioButtons.forEach(button => {
    button.addEventListener('change', function () {
        radioValue = this.value;
    });
});

const data = [
    {
        id: "1,001",
        nama: "Lorem",
        category: "ipsum",
        gambar: "dolor",
        opsi: "Brand new",
        tambahan: "adipiscing",
        harga: 1
    },
    {
        id: "1,002",
        nama: "Lorem",
        category: "ipsum",
        gambar: "dolor",
        opsi: "Second Hand",
        tambahan: "adipiscing",
        harga: 10
    },
    {
        id: "1,003",
        nama: "Lorem",
        category: "ipsum",
        gambar: "dolor",
        opsi: "Brand new",
        tambahan: "adipiscing",
        harga: 20
    },
    {
        id: "1,004",
        nama: "Lorem",
        category: "ipsum",
        gambar: "dolor",
        opsi: "Refushed",
        tambahan: "adipiscing",
        harga: 19
    },
];

const hapus = document.querySelector(".hapus");

tombol.addEventListener("click", function () {

    let id = 1;
    let seribu = "1000";
    const nama = product_name.value;
    const tambahan = additional.value;
    const harga = price.value;

    let ubah = parseFloat(seribu.replace(/,/g, ''));
    let hasil = id + ubah;

    const newData = {
        id: (hasil + data.length).toLocaleString(),
        nama,
        category: dropdownValue,
        gambar: "dolor",
        opsi: radioValue,
        tambahan,
        harga,
    };

    data.push(newData);

    product_name.value = '';
    price.value = '';
    additional.value = '';
    // Reset dropdown and radio to default values
    document.getElementById('dropdownMenuButton1').textContent = 'Choose';
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    console.log(data);

    tombol.disabled = true;

    const tableRows = data.map(datum => {
        return `
        <tr>
            <th scope="row">${datum.id}</th>
            <td>${datum.nama}</td>
            <td>${datum.category}</td>
            <td>${datum.gambar}</td>
            <td>${datum.opsi}</td>
            <td>${datum.tambahan}</td>
            <td>${datum.harga}</td>
        </tr>
        `;
    });

    tableBody.innerHTML = tableRows.join('');
})

hapus.addEventListener("click", function () {
    // Remove the last element from the data array
    data.pop();
    // Rebuild the table with the updated data
    const tableRows = data.map(datum => {
        return `
        <tr>
            <th scope="row">${datum.id}</th>
            <td>${datum.nama}</td>
            <td>${datum.category}</td>
            <td>${datum.gambar}</td>
            <td>${datum.opsi}</td>
            <td>${datum.tambahan}</td>
            <td>${datum.harga}</td>
            </tr>
            `;
    });

    console.log(data);

    tableBody.style.border = "none";
    tableBody.innerHTML = tableRows.join('');
});

const cari = document.querySelector(".cari");
const searchInput = document.querySelector(".searchInput");

cari.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        alert("Please enter a search term.");
        return;
    }

    const searchResults = data.filter(item => item.nama.toLowerCase().includes(searchTerm));

    if (searchResults.length === 0) {
        alert("No matching products found.");
    } else {
        // Format the search results for display
        const formattedResults = searchResults.map(result => `${result.nama} - Category : ${result.category}; Opsi : ${result.opsi}; Tambahan : ${result.tambahan}; Price : ${result.harga}`).join("\n");
        alert(`Search results:\n${formattedResults}`);
    }

    // Clear the search input
    searchInput.value = "";
});