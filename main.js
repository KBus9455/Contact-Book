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

contactsData = [{
        name: "Katarzyna",
        phone: "123456789",
        address: "Cicha 4",
        city: "Poznan"

    }, {
        name: "Grzegorz",
        phone: "9764756765",
        address: "Jasna 5",
        city: "Rzeszow"

    }, {
        name: "Janek",
        phone: "775756756",
        address: "Prosta 24",
        city: "Warszawa"
    },{
        name: "Katarzyna",
        phone: "123456789",
        address: "Cicha 4",
        city: "Poznan"

    }, {
        name: "Grzegorz",
        phone: "9764756765",
        address: "Jasna 5",
        city: "Rzeszow"

    }, {
        name: "Janek",
        phone: "775756756",
        address: "Prosta 24",
        city: "Warszawa"
    },{
        name: "Katarzyna",
        phone: "123456789",
        address: "Cicha 4",
        city: "Poznan"

    }, {
        name: "Grzegorz",
        phone: "9764756765",
        address: "Jasna 5",
        city: "Rzeszow"

    }, {
        name: "Janek",
        phone: "775756756",
        address: "Prosta 24",
        city: "Warszawa"
    },

];
loadTableData(contactsData);

function loadTableData(contactsData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = "";
    for (let contact of contactsData){
        dataHtml += `<tr><td>${contact.name}</td><td>${contact.address}</td><td>${contact.phone}</td><td>${contact.city}</td></tr>`
    };
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

    clearInputs();
    addContactWindow.classList.toggle("active");
}

addContactSubmitButton.addEventListener('click', addContactSubmit);



    // const display = document.getElementById("display");
    // let newRow = display.insertRow(row);

    // // let cell1 = newRow.insertCell(0);
    // // let cell2 = newRow.insertCell(1);
    // // let cell3 = newRow.insertCell(2);
    // // let cell4 = newRow.insertCell(3);

    // // localStorage.setItem("name", name);
    // // localStorage.setItem("phone", phone);
    // // localStorage.setItem("address", address);
    // // localStorage.setItem("city", city);

    // // cell1.innerHTML = localStorage.name;
    // // cell2.innerHTML = localStorage.phone;
    // // cell3.innerHTML= localStorage.address;
    // // cell4.innerHTML = localStorage.city;

    // // let jsonObj = { 'row': cell1.innerHTML };
    // //   localStorage.setItem('row', JSON.stringify(jsonObj));
    // //   cell1 = localStorage.getItem('row');