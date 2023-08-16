const pwdEl = document.querySelector("#pwd");
const pwdConfirmEl = document.querySelector("#confirm-pwd");
const formEl = document.querySelector("#form");
const phoneNumberInput = document.querySelector("#phone");

let formValidated = false;

// Event Listener
formEl.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  const pwdErrorMsgEl = document.querySelector(".pwd-error");

  let pwd = pwdEl.value;
  let confirmedPwd = pwdConfirmEl.value;

  if (pwd.length < 8 || confirmedPwd.length < 8) {
    pwdErrorMsgEl.innerText = "Password should be at least 8 characters long";
    pwdErrorMsgEl.removeAttribute("hidden");
    showError();
  } else {
    if (pwd.length !== confirmedPwd.length) {
      pwdErrorMsgEl.innerText = "Passwords don't match";
      pwdErrorMsgEl.removeAttribute("hidden");
      showError();
    } else {
      removeError();
      formValidated = true;
      pwdErrorMsgEl.innerText = "";
      pwdErrorMsgEl.setAttribute("hidden", true);
    }
  }

  if (formValidated) formEl.submit();
}

function showError() {
  pwdEl.classList.add("show-pwd-input-error", "not-hoverable");
  pwdConfirmEl.classList.add("show-pwd-input-error", "not-hoverable");
}

function removeError() {
  pwdEl.classList.remove("show-pwd-input-error", "not-hoverable");
  pwdConfirmEl.classList.remove("show-pwd-input-error", "not-hoverable");
}

// Phone number formatter
phoneNumberInput.addEventListener("input", formatPhoneNumber);

function formatPhoneNumber(e) {
  const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters

  if (input.length <= 5) {
    const formatted = input; // No need for hyphen
    phoneNumberInput.value = formatted;
  } else {
    const firstPart = input.slice(0, 5);
    const secondPart = input.slice(5, 10);
    const formatted = `${firstPart} ${secondPart}`;
    phoneNumberInput.value = formatted;
  }
}
