// COUNTER STARTS HERE
let inCrementBtn = document.querySelector('.inCrementBtn')

let counterInput = document.querySelector(".counter input")


function increment() {
  let value = Number(counterInput.value)
  counterInput.value = value + 1;

}

inCrementBtn.addEventListener('click', increment)

let deCrementBtn = document.querySelector('.deCrementBtn')
function decrement() {
  let value = Number(counterInput.value)
  if (value > 1) {
    counterInput.value = value - 1;
  }
}
deCrementBtn.addEventListener('click', decrement)

function convertToPositiveNumber() {
  let positiveNum = Math.abs(counterInput.value);
  counterInput.value = positiveNum
}

counterInput.addEventListener('keyup', convertToPositiveNumber)
// COUNTER ENDS HERE



// PASSWORD TOGGLER STARTS HERE
let passwordToggler = document.querySelector(".passwordBtn");
let passwordInput = document.querySelector(".passwordField input");
function passwordShow() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    passwordToggler.innerHTML = '<i class="bi bi-eye"></i>';
  } else {
    passwordInput.type = "password";
    passwordToggler.innerHTML = '<i class="bi bi-eye-slash"></i>';
  }
}

passwordToggler.addEventListener("click", passwordShow);

let submitBtn = document.querySelector(".submitBtn");

function submitForm() {

    // condition ? 'true' : 'else'

    passwordInput.value.length > 6
      ? alert("You have successfully entered your password")
      : (passwordInput.value.length == 0 ? alert("Password field is Empty, Enter your password") : alert("password is too short, it must be at least 7 characters long"));


}

submitBtn.addEventListener("click", submitForm);