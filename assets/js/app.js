document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.container__form--left--form form');
    let emailInput = document.getElementsByClassName("email-modal__input")[0];
    let emailButton = document.getElementsByClassName("email-modal__button")[0];
    let emailModal = document.getElementsByClassName("email-modal")[0];
    let leftContainer = document.getElementsByClassName("container__form--left")[0];
    let rightContainer = document.getElementsByClassName("container__form--right")[0];

    function emailValid(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

      form.addEventListener('submit', function(e) {
        e.preventDefault();
      });


      

      emailButton.addEventListener("click", () => {
        if (emailValid(emailInput.value)) {
            emailModal.style.display = "block";
            leftContainer.style.display = "none";
            rightContainer.style.display = "none";

            
          } else {
            console.log("Please provide a valid email address");
          }
      });

     

    });



