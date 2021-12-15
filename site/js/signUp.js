const email = document.getElementById("email");
const signUpBtn = document.getElementById("btn_signup");

function clearInput() {
  console.log("asdf");
  email.nodeValue = "";
}

signUpBtn.addEventListener("click", clearInput);
