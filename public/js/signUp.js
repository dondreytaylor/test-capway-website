const email = document.getElementById("email");
const signUpBtn = document.getElementById("btn_signup");

function clearInput() {
  email.value = "";
}

signUpBtn.addEventListener("click", clearInput);
