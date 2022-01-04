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
const town = document.querySelectorAll(".town");
const townForm = document.querySelector(".townForm");
const conditions = document.querySelector(".conditions");
const conditionsForm = document.querySelector(".conditionsForm");
// Appel de toutes les erreurs 
const firstErr = document.querySelector(".firstErr");
const lastErr = document.querySelector(".lastErr");
const emailErr = document.querySelector(".emailErr");
const birthdateErr = document.querySelector(".birthdateErr");
const quantityErr = document.querySelector(".quantityErr");
const townErr = document.querySelector(".townErr");
const conditionsErr = document.querySelector(".conditionsErr");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  submitSuccess.style.display = "none";
}

// close modal event 
closeBtn.forEach((close) => close.addEventListener("click", () => {
  closeModal();
  form.reset();
}));
closeAfterValid.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Soumission du formulaire 
modalSubmit.addEventListener('click', function(e){
  e.preventDefault();
  validFirst();
  validLast();
  validEmail();
  validBirthdate();
  validQuantity();
  validTown();
  validConditions();
  if(firstValid && lastValid && emailValid && birthdateValid && quantityValid && validTown && conditionsValid === true){
      console.log('test');
      form.reset(); // reset du formulaire s'il est valide 
      form.style.display = "none";
      submitSuccess.style.display = "block";
  }
});

// Validation Prénom 
firstName.addEventListener('focusout', function(){
  validFirst();
});

// création d'un paragraphe dans le HTML pour le message d'erreur
let firstValid;
firstErr.style.display = "none";

function validFirst(){
  //Au moins 2 caractères dans le prénom 
  if(firstName.value.length < 2){
    firstErr.style.display = "block";
    firstErr.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstName.style.border = "solid 2px red";
    firstValid = false;
  } else {
      firstErr.style.display = "none";
      firstName.style.border = "none";
      firstValid = true;
  }
}


// Validation Nom
lastName.addEventListener('focusout', function(){
  validLast();
});

let lastValid;
lastErr.style.display = "none";

function validLast(){ 
  // Au moins 2 caractères dans le nom 
  if(lastName.value.length < 2){
    lastErr.style.display = "block";
    lastErr.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastName.style.border = "solid 2px red";
    lastValid = false;
  } else {
      lastErr.style.display = "none";
      lastName.style.border = "none";
      lastValid = true;
  }
}

// Validation email 
email.addEventListener('focusout', function(){
  validEmail();
});

// Regex pour l'email
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

// création d'un paragraphe dans le HTML pour le message d'erreur
let emailValid;
emailErr.style.display = "none";

function validEmail(){
  // Adresse valide obligatoire  
  if(emailRegExp.test(email.value)){
    emailErr.style.display = "none";
    email.style.border = "none";
    emailValid = true;
  } else {
    emailErr.style.display = "block";
    emailErr.textContent = "Veuillez entrer une adresse email valide.";
    email.style.border = "solid 2px red";
    emailValid = false;
  }
}

// Validation date de naissance 
birthdate.addEventListener('focusout', function(){
  validBirthdate();
});

// La date de naissance ne peut pas être supérieur à 2005 (16 ans max)
const minDate = new Date('December 31, 2005').toISOString().split('T')[0];
console.log(minDate);
birthdate.max = minDate;

// Expression regulière au format YYYY-MM-DD
let birthdateRegEx = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');

let birthdateValid;
birthdateErr.style.display = "none";

function validBirthdate(){
  if(birthdateRegEx.test(birthdate.value)){
    birthdateErr.style.display = "none";
    birthdate.style.border = "none";
    birthdateValid = true;
  } else {
    birthdateErr.style.display = "block";
    birthdateErr.textContent = "Veuillez indiquer votre date de naissance."
    birthdate.style.border = "solid 2px red";
    birthdateValid = false;
  }
  // condition seule pour empêcher l'utilisateur de mettre une adresse non valide à la main type 2021
  if(birthdate.value > birthdate.max) {
    birthdateErr.style.display = "block";
    birthdateErr.textContent = "Veuillez indiquer une date valide."
    birthdate.style.border = "solid 2px red";
    birthdateValid = false;
  }
}


// Nombres de tournois 
quantity.addEventListener('focusout', function(){
  validQuantity();
});

// RegExp pour les chiffres jusqu'à 6 répétitions max 
let quantityRegExp = new RegExp('^[0-9]{1,6}$');

let quantityValid;
quantityErr.style.display = "none";

function validQuantity(){
  // entrer un chiffre  
  if(quantityRegExp.test(quantity.value)){
    quantityErr.style.display = "none";
    quantity.style.border = "none";
    quantityValid = true;
  } else {
    quantityErr.style.display = "block";
    quantityErr.textContent = "Veuillez entrer un nombre."
    quantity.style.border = "solid 2px red";
    quantityValid = false;
  }
}

// Validation villes 
for (let i = 0; i < town.length; i++) {
  town[i].addEventListener("change", validTown);
}

let townValid;
townErr.style.display = "none";

function validTown(){
  for (let i = 0; i < town.length; i++) {
    console.log(town.value);
     if(town[i].checked){
    townErr.style.display = "none";
    return true;
  }
}   
    townErr.style.display = "block";
    townErr.textContent = "Vous devez choisir une ville.";
    return false;
}

// Case des conditions bien cochée 
conditions.addEventListener('change', function(){
  validConditions();
});

let conditionsValid;
conditionsErr.style.display = "none";

function validConditions(){
  if(conditions.checked){
    conditionsErr.style.display = "none";
    conditionsValid = true;
  } else {
    conditionsErr.style.display = "block";
    conditionsErr.textContent = "Vous devez accepter les termes et conditions pour participer."
    conditionsValid = false;
  }
}