const addContactButton = document.querySelector('button.add');
const addContactWindow = document.querySelector('.addContactWrapper');
const addContactCancelButton = document.querySelector('.addContactButtons button');
const addContactSubmitButton = document.querySelector('.addContactButtons button.btn-success');
const editContactSubmitButton = document.querySelector('.addContactButtons button.btn-warning');
const deleteContactButton = document.querySelector('button.delete');
const display = document.querySelector("#display");
let deleteButtonsArray;
let editButtonsArray;
let contactsData;

// current item:
let currentContactId = null;


// Display window to add new contact 

const showAddContactWindow = () => {
    deleteButtonsArray.forEach(button => {
        button.classList.remove('active')
    });
    document.querySelector("div.title").textContent = "Add contact";
    editContactSubmitButton.style.display = "none";
    addContactSubmitButton.style.display = "inline";
    addContactWindow.classList.toggle("active");
}

addContactButton.addEventListener("click", showAddContactWindow);

// Clear Inputs function 

const clearInputs = function () {
    [...document.querySelectorAll('.addContact input')].forEach(input => {
        input.value = "";
    })
};

// Hide window to add contact 
addContactCancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    addContactWindow.classList.toggle("active");
    editContactSubmitButton.style.display = "inline";
    clearInputs();
})

// loading contacts form array 

loadTableData();

function loadTableData() {
    const tableBody = document.getElementById('tableData');
    let itemsFromLocalStorage = localStorage.getItem('savedContacts');
    contactsData = JSON.parse(itemsFromLocalStorage);
    let dataHtml = "";
    if (contactsData !== null) {
        let id = 1;
        for (let contact of contactsData) {
            dataHtml += `<tr><td>${id}.</td><td>${contact.name}</td><td>${contact.address}</td><td>${contact.phone}</td><td>${contact.city}</td><td><i class="fas fa-pencil-alt"></i></td><td><button type="button" class="btn btn-danger deleteInLine">X</button></td></tr>`
            id++;
        };
    }
    tableBody.innerHTML = dataHtml;
    deleteButtonsArray = [...display.querySelectorAll("button")];
    editButtonsArray = [...document.querySelectorAll("i")];
}


const addContactSubmit = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    editContactSubmitButton.style.display = "none";

    if (!name || !phone || !address || !city) {
        alert("Fill in all fields");
        return;
    }

    let itemsFromLocalStorage = localStorage.getItem('savedContacts');
    let contactsData = JSON.parse(itemsFromLocalStorage);
    if (contactsData === null) {
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

// showDelete icon: 
const removeActive = function () {
    deleteButtonsArray.forEach(button => {
        button.classList.toggle('active')
    });
}
deleteContactButton.addEventListener("click", removeActive);

// delete element
const removeElement = function (e) {
    e.preventDefault();
    const listId = e.target.parentNode.parentNode;
    const id = listId.querySelector("td").textContent;
    currentContactId = parseInt(id) - 1;
contactsData.splice(currentContactId,1);
localStorage.setItem("savedContacts", JSON.stringify(contactsData));
    loadTableData()

}
deleteButtonsArray.forEach(function (button) {
    button.addEventListener("click", removeElement);
})
// edit contact 
const changeWindowToEditContact = function () {
    document.querySelector("div.title").textContent = "Edit contact";
    addContactSubmitButton.style.display = "none";
    editContactSubmitButton.style.display = "inline";
}

const fillInputs = function (id) {
    document.querySelector("#name").value = contactsData[id].name;
    document.querySelector("#phone").value = contactsData[id].phone;
    document.querySelector("#address").value = contactsData[id].address;
    document.querySelector("#city").value = contactsData[id].city;
}

const updateContact = function () {

    console.log("test");
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let address = document.querySelector("#address").value;
    let city = document.querySelector("#city").value;

    if (!name || !phone || !address || !city) {
        alert("Fill in all fields");
        return false;
    };

    contactsData[currentContactId].name = name;
    contactsData[currentContactId].phone = phone;
    contactsData[currentContactId].address = address;
    contactsData[currentContactId].city = city;

    localStorage.setItem("savedContacts", JSON.stringify(contactsData));
    clearInputs();
    addContactWindow.classList.remove("active");
    loadTableData();

}

editContactSubmitButton.addEventListener('click', updateContact);


const editContact = function (e) {
    e.preventDefault();
    showAddContactWindow();
    changeWindowToEditContact();
    const listId = e.target.parentNode.parentNode;
    const id = listId.querySelector("td").textContent;
    currentContactId = parseInt(id) - 1;
    console.log(id);
    fillInputs(currentContactId);

    console.log("actual contact Id " + currentContactId);
}

editButtonsArray.forEach(function (button) {
    button.addEventListener("click", editContact);
})