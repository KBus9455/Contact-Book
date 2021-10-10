const addContactButton = document.querySelector('button.add');
const addContactWindow = document.querySelector('.addContactWrapper');
const addContactCancelButton = document.querySelector('.addContactButtons button');
const addContactSubmitButton = document.querySelector('.addContactButtons button.btn-success');
const deleteContactButton = document.querySelector('button.delete');

// Display window to add new contact 

const addContact = () => {
    deleteButtonsArray.forEach(button => {
        button.classList.remove('active')
    });
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
            dataHtml += `<tr><td>${contact.name}</td><td>${contact.address}</td><td>${contact.phone}</td><td>${contact.city}</td><td><button type="button" class="btn btn-danger deleteInLine">X</button></td></tr>`
        };
    }
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
    addContactWindow.classList.remove("active");
    loadTableData();
}
addContactSubmitButton.addEventListener('click', addContactSubmit);


// Delete contact:
const display = document.querySelector("#display");
const deleteButtonsArray = [...display.querySelectorAll("button")];
deleteContactButton.addEventListener("click", function () {
    deleteButtonsArray.forEach(button => {
        button.classList.toggle('active')
    });
    console.log("dziala");
})