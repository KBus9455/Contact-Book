const addContactButton = document.querySelector('button.add');
const addContactWindow = document.querySelector('.addContactWrapper');
const addContactCancelButton = document.querySelector('.addContactButtons button');
const addContactSubmitButton = document.querySelector('.addContactButtons button.btn-success');

// Display window to add new contact 

const addContact = () => {
    addContactWindow.classList.toggle("active");
}

addContactButton.addEventListener("click", addContact);


// Clear Inputs function 

const clearInputs = function () {
    [...document.querySelectorAll('.addContact input')].forEach(input => {
        input.value = "";
    })
};

// Hide window to add contact 
addContactCancelButton.addEventListener('click', () => {
    addContactWindow.classList.toggle("active");
    clearInputs();
})

// loading contacts form array 

loadTableData();

function loadTableData() {
    const tableBody = document.getElementById('tableData');
    let itemsFromLocalStorage = localStorage.getItem('savedContacts');
    let contactsData = JSON.parse(itemsFromLocalStorage);
    let dataHtml = "";
    if (contactsData !== null) {
        for (let contact of contactsData) {
            dataHtml += `<tr><td>${contact.name}</td><td>${contact.address}</td><td>${contact.phone}</td><td>${contact.city}</td><td><button><i class="fas fa-trash-alt"></i></button></td></tr>`
        };
    }
    console.log(dataHtml);
    tableBody.innerHTML = dataHtml;
}



let row = 1;
const addContactSubmit = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    if (!name || !phone || !address || !city) {
        alert("Fill in all fields");
        return;
    }

    let itemsFromLocalStorage = localStorage.getItem('savedContacts');
    let contactsData = JSON.parse(itemsFromLocalStorage);
    if (contactsData == null) {
        contactsData = [];
    }
    contactsData.push({
        name,
        phone,
        address,
        city
    });
    localStorage.setItem("savedContacts", JSON.stringify(contactsData));
    clearInputs();
    addContactWindow.classList.toggle("active");
    loadTableData();
}

addContactSubmitButton.addEventListener('click', addContactSubmit);

