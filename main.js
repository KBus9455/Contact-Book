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
let currentContact;


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
            dataHtml += `<tr><td>${id}</td><td>${contact.name}</td><td>${contact.address}</td><td>${contact.phone}</td><td>${contact.city}</td><td><i class="fas fa-pencil-alt"></i></td><td><button type="button" class="btn btn-danger deleteInLine">X</button></td></tr>`
            id++;
        };
    }
    tableBody.innerHTML = dataHtml;
  deleteButtonsArray = [...display.querySelectorAll("button")];
  editButtonsArray = [...document.querySelectorAll("i")];
}

let row = 1;
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

const removeActive = function (){
    deleteButtonsArray.forEach(button => {
        button.classList.toggle('active')
    });
}
deleteContactButton.addEventListener("click", removeActive);


const removeElement = function(){
    let index;
    
}


// edit contact 
const changeWindowToEditContact = function (){
  document.querySelector("div.title").textContent = "Edit contact"; 
  addContactSubmitButton.style.display = "none";
  editContactSubmitButton.style.display = "inline";
}

const fillInputs = function (id){
 document.querySelector("#name").value = contactsData[id].name;
 document.querySelector("#phone").value = contactsData[id].phone;
 document.querySelector("#address").value = contactsData[id].address;
 document.querySelector("#city").value = contactsData[id].city;
}


const editContact = function (e){
    e.preventDefault();
showAddContactWindow();
changeWindowToEditContact();
const listId = e.target.parentNode.parentNode;
const id = listId.querySelector("td").textContent;
console.log(id);
fillInputs(id);
}

editButtonsArray.forEach(function(button){
button.addEventListener("click", editContact);
})
