const addContactButton = document.querySelector('button.add');
const addContactWindow = document.querySelector('.addContactWrapper');
const addContactCancelButton = document.querySelector('.addContactButtons button');
const addContactSubmitButton = document.querySelector('.addContactButtons button.btn-success');


const addContact=()=>{
addContactWindow.classList.toggle("active");
}
addContactButton.addEventListener("click", addContact);

const clearInputs = function (){
[...document.querySelectorAll('.addContact input')].forEach(input=>{
    input.value="";
})
};
addContactCancelButton.addEventListener('click', ()=>{
addContactWindow.classList.toggle("active");
clearInputs();
})

let row = 1;
const addContactSubmit =()=>{
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;
let city = document.getElementById("city").value;

if(!name || !phone || !address || !city){
    alert ("Fill in all fields");
    return;
}

let display  = document.getElementById("display");
let newRow = display.insertRow(row);

let cell1 = newRow.insertCell(0);
let cell2 = newRow.insertCell(1);
let cell3 = newRow.insertCell(2);
let cell4 = newRow.insertCell(3);

cell1.textContent = name;
cell2.textContent = phone;
cell3.textContent = address;
cell4.textContent = city;

clearInputs();
addContactWindow.classList.toggle("active");
}

addContactSubmitButton.addEventListener('click', addContactSubmit);