document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.container__form--left--form form');
    const emailInput = document.getElementsByClassName("email-modal__input")[0];
    const emailButton = document.getElementsByClassName("email-modal__button")[0];
    const emailModal = document.getElementsByClassName("email-modal")[0];
    const containerBlock = document.getElementsByClassName("container")[0];
    const emailNotValid = document.getElementsByClassName("invalidEmail")[0];
    const closeButton = document.getElementsByClassName("email-modal__close")[0];

    const originalContainerDisplay = window.getComputedStyle(containerBlock).display;

    
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

      
      closeButton.addEventListener("click", () => {
        emailModal.style.display = "none";
        containerBlock.style.display = originalContainerDisplay;
        emailInput.value = "";
      });

     

    });

