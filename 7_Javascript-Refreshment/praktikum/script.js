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

tombol.addEventListener("click", function () {
    alert(`Product Name : ${product_name.value}\nProductCategory : ${dropdownValue}\nProduct Refreshness : ${radioValue}\nAdditional Description : ${additional.value}\nProduct Price : ${price.value}`)
})