document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.container__form--left--form form');
    let emailInput = document.getElementsByClassName("email-modal__input")[0];
    let emailButton = document.getElementsByClassName("email-modal__button")[0];
    let emailModal = document.getElementsByClassName("email-modal")[0];
    let containerBlock = document.getElementsByClassName("container")[0];
    let emailNotValid = document.getElementsByClassName("invalidEmail")[0];
    let closeButton = document.getElementsByClassName("email-modal__close")[0];

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






/*document.addEventListener('DOMContentLoaded', function() {
  // Use const for variables that won't be reassigned
  const form = document.querySelector('.container__form--left--form form');
  const emailInput = document.querySelector(".email-modal__input"); // Better than getElementsByClassName[0]
  const emailButton = document.querySelector(".email-modal__button");
  const emailModal = document.querySelector(".email-modal");
  const containerBlock = document.querySelector(".container");
  const emailNotValid = document.querySelector(".invalidEmail");

  // Simplified input state functions
  const setInputErrorState = (hasError) => {
      if (hasError) {
          emailInput.classList.add("email-modal__input--error"); // Add a new error class
          emailNotValid.style.display = "block";
      } else {
          emailInput.classList.remove("email-modal__input--error");
          emailNotValid.style.display = "none";
      }
  };

  // Improved email validation
  const isValidEmail = (email) => {
      // More robust email regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form submission handler
  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (isValidEmail(emailInput.value)) {
          // Show success modal immediately (no need for setTimeout)
          emailModal.style.display = "flex"; // Changed to flex to match your CSS
          containerBlock.style.display = "none";
          
          // Optional: Add animation class
          emailModal.classList.add("modal-show");
      } else {
          setInputErrorState(true);
          emailInput.focus(); // Focus the input for better UX
      }
  };

  // Clear error when user starts typing
  emailInput.addEventListener('input', () => {
      setInputErrorState(false);
  });

  // Event listeners
  form.addEventListener('submit', handleSubmit);
  emailButton.addEventListener("click", handleSubmit); // Use the same handler for both

  // Optional: Add keyboard support for accessibility
  emailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          handleSubmit(e);
      }
  });
});

*/