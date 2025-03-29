
    let emailModal = document.getElementsByClassName("email-modal")[0];
    let emailInput = document.getElementsByClassName("email-modal__input")[0];

    function emailValid(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

      let addErrors = () => {
        document
          .getElementsByClassName("container__form--left--form--input")[0]
          .classList.add("email-modal__form-group--error");
        document
          .getElementsByClassName("email-modal__error-message")[0]
          .classList.add("email-modal__error-message--active");
      };
     
