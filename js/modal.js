function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalSubmit = document.querySelector(".btn-submit");
const submitSuccess = document.querySelector(".submit-success");
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const firstNameForm = document.querySelector(".firstNameForm");
const lastName = document.querySelector("#last");
const lastNameForm = document.querySelector(".lastNameForm");
const email = document.querySelector("#email");
const emailForm = document.querySelector(".emailForm");
const birthdate = document.querySelector("#birthdate");
const birthdateForm = document.querySelector(".birthdateForm");
const quantity = document.querySelector("#quantity");
const quantityForm = document.querySelector(".quantityForm");
const town = document.querySelector(".town");
const townForm = document.querySelector(".townForm");
const conditions = document.querySelector(".conditions");
const conditionsForm = document.querySelector(".conditionsForm");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event 
closeBtn.forEach((close) => close.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validation Prénom 
firstName.addEventListener('focusout', function(){
  validFirst(this);
});

// création d'un paragraphe dans le HTML pour le message d'erreur
let firstError = document.createElement("p");

const validFirst = function(inputFirst){
  let msg; 
  let valid = false;
  //Au moins 2 caractères dans le prénom 
  if(inputFirst.value.length < 2){
    firstNameForm.appendChild(firstError);
    msg = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    firstError.innerHTML = msg;
    firstError.classList.add('text-danger');
    firstName.style.border = "solid 2px red";
  } else {
      valid = true;
      firstError.classList.remove('text-danger');
      firstName.style.border = "none";
      firstNameForm.removeChild(firstError);
  }
}

// Validation Nom
lastName.addEventListener('focusout', function(){
  validLast(this);
});

// création d'un paragraphe dans le HTML pour le message d'erreur
let lastError = document.createElement("p");

const validLast = function(inputLast){
  let msg; 
  let valid = false;
  // Au moins 2 caractères dans le nom 
  if(inputLast.value.length < 2){
    lastNameForm.appendChild(lastError);
    msg = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    lastError.innerHTML = msg;
    lastError.classList.add('text-danger');
    lastName.style.border = "solid 2px red";
  } else {
      valid = true;
      lastError.classList.remove('text-danger');
      lastName.style.border = "none";
      lastNameForm.removeChild(lastError);
  }
}

// Validation email 
email.addEventListener('focusout', function(){
  validEmail(this);
});

// Regex pour l'email
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

// création d'un paragraphe dans le HTML pour le message d'erreur
let emailError = document.createElement("p");

const validEmail = function(inputEmail){
  let msg; 
  let valid = false;
  // Adresse valide obligatoire  
  if(emailRegExp.test(inputEmail.value)){
    valid = true;
    emailError.classList.remove('text-danger');
    email.style.border = "none";
    emailForm.removeChild(emailError);
  } else {
    emailForm.appendChild(emailError);
    msg = 'Veuillez entrer une adresse email valide.';
    emailError.innerHTML = msg;
    emailError.classList.add('text-danger');
    email.style.border = "solid 2px red";
  }
}

// Validation date de naissance 
birthdate.addEventListener('focusout', function(){
  validBirthdate(this);
});

// La date de naissance ne peut pas être supérieur à 2005
const minDate = new Date('December 31, 2005').toISOString().split('T')[0];
console.log(minDate);
birthdate.max = minDate;


let birthdateRegEx = new RegExp('^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$');

let birthdateError = document.createElement("p");

const validBirthdate = function(inputBirthdate){
  let msg; 
  let valid = false;
  console.log(birthdateRegEx);
  if(birthdateRegEx.test(inputBirthdate.value)){
    valid = true;
    birthdateError.classList.remove('text-danger');
    birthdate.style.border = "none";
    birthdateForm.removeChild(birthdateError);
  } else if(inputBirthdate.value > birthdate.max){
    birthdateForm.appendChild(birthdateError);
    msg = 'Veuillez indiquer une date de naissance valide.';
    birthdateError.innerHTML = msg;
    birthdateError.classList.add('text-danger');
    birthdate.style.border = "solid 2px red";
  } else {
    birthdateForm.appendChild(birthdateError);
    msg = 'Veuillez indiquer votre date de naissance.';
    birthdateError.innerHTML = msg;
    birthdateError.classList.add('text-danger');
    birthdate.style.border = "solid 2px red";
  }
}


// Nombres de tournois 
quantity.addEventListener('focusout', function(){
  validQuantity(this);
});

// RegExp pour les chiffres jusqu'à 6 répétitions max 
let quantityRegExp = new RegExp('^[0-9]{1,6}$');

// création d'un paragraphe dans le HTML pour le message d'erreur
let quantityError = document.createElement("p");

const validQuantity = function(inputQuantity){
  let msg; 
  let valid = false;
  // entrer un chiffre  
  if(quantityRegExp.test(inputQuantity.value)){
    valid = true;
    quantityError.classList.remove('text-danger');
    quantity.style.border = "none";
    quantityForm.removeChild(quantityError);
  } else {
    quantityForm.appendChild(quantityError);
    msg = 'Vous devez entrer un nombre.';
    quantityError.innerHTML = msg;
    quantityError.classList.add('text-danger');
    quantity.style.border = "solid 2px red";
  }
}

// Validation villes 
town.addEventListener('click', function(){
  validTown(this);
});

// création d'un paragraphe dans le HTML pour le message d'erreur 
let townError = document.createElement('p');

const validTown = function(inputTown){
  let msg; 
  let valid = false;
  if(inputTown.checked){
    valid = true;
    townError.classList.remove('text-danger');
    townForm.removeChild(townError);
  } else {
    townForm.appendChild(townError);
    msg = 'Vous devez choisir une ville';
    townError.innerHTML = msg;
    townError.classList.add('text-danger');
  }
}
