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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Get the <span> element that closes the modal
const modalClose = document.getElementById("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function () {
  modalbg.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
};

var checks = document.querySelectorAll(".checkbox-input");

for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".checkbox-input:checked");
  var quantity = parseInt(document.getElementById("quantity").value);
  if (checkedChecks.length >= quantity + 2)
    return false;
  /*setCustomValidity('Vous devez entrer votre date de naissance.');*/
}

function validate() {
  /* document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
  }); 
  e.preventDefault(e);*/

  const varsForm = {
    first: document.getElementById("first"),
    last: document.getElementById("last"),
    email: document.getElementById("email"),
    birthdate: document.getElementById("birthdate"),
    quantity: document.getElementById("quantity"),
    NewYork: document.getElementById("location1").checked,
    SanFrancisco: document.getElementById("location2").checked,
    Seattle: document.getElementById("location3").checked,
    Chicago: document.getElementById("location4").checked,
    Boston: document.getElementById("location5").checked,
    Portland: document.getElementById("location6").checked
};

emailjs.send('service_fqmxk3h', 'template_zhusj29', varsForm)
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });

var textNewYork = 'Non';
  if (document.getElementById("location1").checked) {
      textNewYork = 'Oui';
  }
var textSanFrancisco = 'Non';
  if (document.getElementById("location2").checked) {
      textSanFrancisco = 'Oui';
  }
var textSeattle = 'Non';
  if (document.getElementById("location3").checked) {
      textSeattle = 'Oui';
  }
var textChicago = 'Non';
  if (document.getElementById("location4").checked) {
      textChicago = 'Oui';
  }
var textBoston = 'Non';
  if (document.getElementById("location5").checked) {
      textBoston = 'Oui';
  }
var textPortland = 'Non';
  if (document.getElementById("location6").checked) {
      textPortland = 'Oui';
  }

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  //setTimeout(validate(), 8000);
  if (popup.classList.contains("show")) {// Check if the popup is shown
    setTimeout(() => popup.classList.remove("show"), 4000);
    setTimeout(() => modalbg.style.display = "none", 4000);
  } // If yes hide it after 10000 milliseconds
  return false;
}

/*
window.onload = function() {
   document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_fqmxk3h', 'template_zhusj29', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
} */

/*var checks = document.querySelectorAll(".checkbox-input");

for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".checkbox-input:checked");
  var quantity = parseInt(document.getElementById("quantity").value);
  if (checkedChecks.length >= quantity + 2)
    return false;
  /*setCustomValidity('Vous devez entrer votre date de naissance.');
}*/