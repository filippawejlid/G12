export function form() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
      } else {
        window.location.replace("https://www.google.com/")     
      }
    }, false);

    console.log("hih");

  });
}

//window.location.replace("landingpage.html");
//window.location.href="http://localhost:1234/checkout.html?"; 
