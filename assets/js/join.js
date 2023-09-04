import { validateEmail, validateFullName } from "./validation.js";
const header_icon = document.querySelector(".header-icon");
const join = document.querySelector(".join");
const canc = document.querySelector(".canc");
const dark = document.querySelector(".dark");
header_icon.addEventListener("click", () => {
  join.style.display = "block";
  dark.style.display = "block";
});
canc.addEventListener("click", () => {
  join.style.display = "none";
  dark.style.display = "none";
});

const joinBtn = document.querySelector(".joinBtn");
const full_name = document.getElementById("fName");
const email = document.getElementById("emaiL");
const f_name_error = document.getElementById("fName-error");
const email_error = document.getElementById("emaiL-error");

joinBtn.addEventListener("mousemove", () => {
  if (!full_name.value || !email.value) {
    joinBtn.disabled = true;
  } else {
    joinBtn.disabled = false;
  }
});

joinBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent
  const f_name_result = validateFullName(full_name.value);
  const email_result = validateEmail(email.value);

  // name validate
  if (!f_name_result) {
    full_name.style.borderColor = "red";
    f_name_error.innerHTML = "Please enter the correct FullName";
  } else {
    full_name.style.borderColor = "green";
    f_name_error.innerHTML = "";
  }

  // email validate

  if (!email_result) {
    email.style.borderColor = "red";
    email_error.innerHTML = "Please enter the correct Email";
  } else {
    email.style.borderColor = "green";
    email_error.innerHTML = "";
  }
});
