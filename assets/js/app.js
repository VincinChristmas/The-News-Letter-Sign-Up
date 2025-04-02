document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.container__form--left--form form');
    let emailInput = document.getElementsByClassName("email-modal__input")[0];
    let emailButton = document.getElementsByClassName("email-modal__button")[0];
    let emailModal = document.getElementsByClassName("email-modal")[0];
    let containerBlock = document.getElementsByClassName("container")[0];
    let emailNotValid = document.getElementsByClassName("invalidEmail")[0];

    
    let closeInput = () => {
        emailInput.classList.remove("email-modal__input");
      };

      closeInput();

      let openInput = () => {
        emailInput.classList.add("email-modal__input");
      };
      
    

    function emailValid(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

      form.addEventListener('submit', function(e) {
        e.preventDefault();
      });

      
      let openModal = () => {
        emailModal.style.display = "block";
      };
      

      emailButton.addEventListener("click", () => {
        if (emailValid(emailInput.value)) {
            setTimeout(() => {
                openModal();
              }, 200);
            containerBlock.style.display = "none";
            
          } else {
            emailNotValid.style.display = "block";
           openInput(); 
          }
      });

     

    });



