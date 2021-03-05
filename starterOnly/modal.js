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
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  //setTimeout(validate(), 8000);
  if (popup.classList.contains("show")) {// Check if the popup is shown
    setTimeout(() => popup.classList.remove("show"), 10000);
  } // If yes hide it after 10000 milliseconds
  return false;
}


/*window.onload = function() {
   document.getElementById('contact-form').addEventListener('submit', function(event) {
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
} */