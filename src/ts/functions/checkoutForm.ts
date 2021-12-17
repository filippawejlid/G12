export function form() {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");
  
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        document.getElementById("form").className = "false-input";
      } else {
        form.classList.add('correct-input');
        
      }
    }, false);
    

  });
}
