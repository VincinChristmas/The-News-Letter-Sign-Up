let emailInput = document.getElementById('email')[0];

function emailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}