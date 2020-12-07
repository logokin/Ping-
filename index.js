const button = document.querySelector(".button");
const inputBox = document.querySelector(".input-box");
const invalid = document.querySelector(".error");
const correct = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

button.addEventListener("click", form);
function form() {

  if (inputBox.value.match(correct)) {
    invalid.textContent = "";
    inputBox.classList.remove("border");
    inputBox.value = "";
  } else {
    invalid.textContent = "please provide a valid email address";
    inputBox.classList.add("border");
  }
}

