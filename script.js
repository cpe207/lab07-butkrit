const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = ()=>{
    firstNameInput.classList.remove("is-valid"),
    firstNameInput.classList.remove("is-invalid")
}
,
lastNameInput.onkeyup = ()=>{
    lastNameInput.classList.remove("is-valid"),
    lastNameInput.classList.remove("is-invalid")
}
,
emailInput.onkeyup = ()=>{
    emailInput.classList.remove("is-valid"),
    emailInput.classList.remove("is-invalid")
}
,
passwordInput.onkeyup = ()=>{
    passwordInput.classList.remove("is-valid"),
    passwordInput.classList.remove("is-invalid")
}
,
submitBtn.onclick = ()=>{
    isFirstNameOk = false ;
    isLastNameOk = false;
    isEmailOk = false;
    isPasswordOk = false;

    "" === firstNameInput.value ? firstNameInput.classList.add("is-invalid") : (firstNameInput.classList.add("is-valid"), isFirstNameOk = true),
    "" === lastNameInput.value ? lastNameInput.classList.add("is-invalid") : (lastNameInput.classList.add("is-valid"),    isLastNameOk = true),
    false === validateEmail(emailInput.value) ? emailInput.classList.add("is-invalid") : (emailInput.classList.add("is-valid"),  isEmailOk = true),
    passwordInput.value.length >= 6 ? (passwordInput.classList.add("is-valid"), isPasswordOk = true) : passwordInput.classList.add("is-invalid"),
    isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && alert("Registered successfully")
};