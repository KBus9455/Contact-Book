const addContactButton = document.querySelector('button.add');
const addContactWindow = document.querySelector('.addContactWrapper');
const addContactCancelButton = document.querySelector('.addContactButtons button');


const addContact=()=>{
console.log("test");
addContactWindow.classList.toggle("active");
}

addContactButton.addEventListener("click", addContact);

addContactCancelButton.addEventListener('click', ()=>{
addContactWindow.classList.toggle("active");
[...document.querySelectorAll('.addContact input')].forEach(input=>{
    input.value="";
})
})