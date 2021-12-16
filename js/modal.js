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
const closeAfterValid = document.querySelector(".success-close-btn");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalSubmit = document.querySelector(".btn-submit");
const form = document.getElementById("modal-form");
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
  form.style.display = "block";
  submitSuccess.style.display = "none";
}

// close modal event 
closeBtn.forEach((close) => close.addEventListener("click", closeModal));
closeAfterValid.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

modalSubmit.addEventListener('click', function(e){
  e.preventDefault();
  if(form.style.display !== "none"){
    submitSuccess.style.display = "block";
    form.style.display = "none"
  }
});


// Soumission du formulaire 

// Validation Prénom 
firstName.addEventListener('change', function(){
  validFirst(this);
});

// création d'un paragraphe dans le HTML pour le message d'erreur
let firstError = document.createElement("p");

const validFirst = function(inputFirst){
  let msg; 
  //Au moins 2 caractères dans le prénom 
  if(inputFirst.value.length < 2){
    firstNameForm.appendChild(firstError);
    msg = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    firstError.innerHTML = msg;
    firstError.classList.add('text-danger');
    firstName.style.border = "solid 2px red";
    return false;
  } else {
      firstError.classList.remove('text-danger');
      firstName.style.border = "none";
      firstNameForm.removeChild(firstError);
      return true;
  }
}

// Validation Nom
lastName.addEventListener('change', function(){
  validLast(this);
});

// création d'un paragraphe dans le HTML pour le message d'erreur
let lastError = document.createElement("p");

const validLast = function(inputLast){
  let msg; 
  // Au moins 2 caractères dans le nom 
  if(inputLast.value.length < 2){
    lastNameForm.appendChild(lastError);
    msg = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    lastError.innerHTML = msg;
    lastError.classList.add('text-danger');
    lastName.style.border = "solid 2px red";
    return false;
  } else {
      lastError.classList.remove('text-danger');
      lastName.style.border = "none";
      lastNameForm.removeChild(lastError);
      return true;
  }
}

// Validation email 
email.addEventListener('change', function(){
  validEmail(this);
});

// Regex pour l'email
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

// création d'un paragraphe dans le HTML pour le message d'erreur
let emailError = document.createElement("p");

const validEmail = function(inputEmail){
  let msg; 
  // Adresse valide obligatoire  
  if(emailRegExp.test(inputEmail.value)){
    emailError.classList.remove('text-danger');
    email.style.border = "none";
    emailForm.removeChild(emailError);
    return true;
  } else {
    emailForm.appendChild(emailError);
    msg = 'Veuillez entrer une adresse email valide.';
    emailError.innerHTML = msg;
    emailError.classList.add('text-danger');
    email.style.border = "solid 2px red";
    return false;
  }
}

// Validation date de naissance 
birthdate.addEventListener('change', function(){
  validBirthdate(this);
});

// La date de naissance ne peut pas être supérieur à 2005
const minDate = new Date('December 31, 2005').toISOString().split('T')[0];
console.log(minDate);
birthdate.max = minDate;

// Expression regulière au format YYYY-MM-DD
let birthdateRegEx = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');

let birthdateError = document.createElement("p");

const validBirthdate = function(inputBirthdate){
  let msg; 
  if(birthdateRegEx.test(inputBirthdate.value)){
    birthdateError.classList.remove('text-danger');
    birthdate.style.border = "none";
    birthdateForm.removeChild(birthdateError);
    return true;
    // Erreur dans le cas où quelqu'un écrirait une date supérieure à la limite à la main
  } else if(inputBirthdate.value > birthdate.max){ 
    birthdateForm.appendChild(birthdateError);
    msg = 'Veuillez indiquer une date de naissance valide.';
    birthdateError.innerHTML = msg;
    birthdateError.classList.add('text-danger');
    birthdate.style.border = "solid 2px red";
    return false;
  } else {
    birthdateForm.appendChild(birthdateError);
    msg = 'Veuillez indiquer votre date de naissance.';
    birthdateError.innerHTML = msg;
    birthdateError.classList.add('text-danger');
    birthdate.style.border = "solid 2px red";
    return false;
  }
}


// Nombres de tournois 
quantity.addEventListener('change', function(){
  validQuantity(this);
});

// RegExp pour les chiffres jusqu'à 6 répétitions max 
let quantityRegExp = new RegExp('^[0-9]{1,6}$');

// création d'un paragraphe dans le HTML pour le message d'erreur
let quantityError = document.createElement("p");

const validQuantity = function(inputQuantity){
  let msg; 
  // entrer un chiffre  
  if(quantityRegExp.test(inputQuantity.value)){
    quantityError.classList.remove('text-danger');
    quantity.style.border = "none";
    quantityForm.removeChild(quantityError);
    return true;
  } else {
    quantityForm.appendChild(quantityError);
    msg = 'Vous devez entrer un nombre.';
    quantityError.innerHTML = msg;
    quantityError.classList.add('text-danger');
    quantity.style.border = "solid 2px red";
    return false;
  }
}

// Validation villes 
town.addEventListener('change', function(){
  validTown(this);
});

// création d'un paragraphe dans le HTML pour le message d'erreur 
let townError = document.createElement('p');

const validTown = function(inputTown){
  let msg; 
  if(inputTown.checked){
    townError.classList.remove('text-danger');
    townForm.removeChild(townError);
    return true;
  } else {
    townForm.appendChild(townError);
    msg = 'Vous devez choisir une ville';
    townError.innerHTML = msg;
    townError.classList.add('text-danger');
    return false;
  }
}

// Case des conditions bien cochée 
conditions.addEventListener('change', function(){
  validConditions(this);
});

let conditionsError = document.createElement('p');

const validConditions = function(inputConditions){
  let msg;
  if(inputConditions.checked){
    conditionsError.classList.remove('text-danger');
    conditionsForm.removeChild(conditionsError);
    return true;
  } else {
    conditionsForm.appendChild(conditionsError);
    msg = 'Vous devez accepter les termes et conditions';
    conditionsError.innerHTML = msg;
    conditionsError.classList.add('text-danger');
    return false;
  }
}