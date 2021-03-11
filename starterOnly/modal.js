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

/*
// Prevent user from selecting more checkboxes than the input number selected
var checks = document.querySelectorAll(".checkbox-input");

for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".checkbox-input:checked");
  var quantity = parseInt(document.getElementById("quantity").value);
  if (checkedChecks.length >= quantity + 2)
    return false;
}*/

// Send form with EmailJS
function validate() {
  const varsForm = {
    first: document.getElementById("first").value,
    last: document.getElementById("last").value,
    email: document.getElementById("email").value,
    birthdate: document.getElementById("birthdate").value,
    quantity: document.getElementById("quantity").value,
    NewYork: document.getElementById("location1").checked,
    SanFrancisco: document.getElementById("location2").checked,
    Seattle: document.getElementById("location3").checked,
    Chicago: document.getElementById("location4").checked,
    Boston: document.getElementById("location5").checked,
    Portland: document.getElementById("location6").checked,
    checkbox2: document.getElementById("checkbox2").checked,
    textNewYork: "",
    textSanFrancisco: "",
    textSeattle: "",
    textChicago: "",
    textBoston: "",
    textPortland: "",
    textcheckbox2: "",
  };

  emailjs.send("service_fqmxk3h", "template_zhusj29", varsForm).then(
    function () {
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  var textNewYork = "Non";
  if (document.getElementById("location1").checked) {
    textNewYork = "Oui";
    console.log(textNewYork);
  }
  var textSanFrancisco = "Non";
  if (document.getElementById("location2").checked) {
    textSanFrancisco = "Oui";
  }
  var textSeattle = "Non";
  if (document.getElementById("location3").checked) {
    textSeattle = "Oui";
  }
  var textChicago = "Non";
  if (document.getElementById("location4").checked) {
    textChicago = "Oui";
  }
  var textBoston = "Non";
  if (document.getElementById("location5").checked) {
    textBoston = "Oui";
  }
  var textPortland = "Non";
  if (document.getElementById("location6").checked) {
    textPortland = "Oui";
  }
  var textcheckbox2 = "Non";
  if (document.getElementById("checkbox2").checked) {
    textcheckbox2 = "Oui";
  }

  // Display and Close popup message and modal
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  if (popup.classList.contains("show")) {
    // Check if the popup is shown
    setTimeout(() => popup.classList.remove("show"), 4000);
    setTimeout(() => (modalbg.style.display = "none"), 4000);
  } // If yes hide it after 4000 milliseconds
  return false;
}


