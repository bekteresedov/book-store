import {
  validateNote,
  validateAddress,
  validateAzerbaijanPhoneNumber,
  validateEmail,
  validateFullName,
} from "./validation.js";

//input
const full_name = document.getElementById("f-name");
const email = document.getElementById("email");
const note = document.getElementById("note");
const address = document.getElementById("address");
const phoneNumber = document.getElementById("phone");
const button = document.getElementById("button");

//error message
const f_name_error = document.getElementById("f-name-error");
const email_error = document.getElementById("email-error");
const address_error = document.getElementById("address-error");
const phone_error = document.getElementById("phone-error");
const note_error = document.getElementById("note-error");

button.addEventListener("mousemove", () => {
  if (
    !full_name.value ||
    !email.value ||
    !phoneNumber.value ||
    !address.value ||
    !note.value
  ) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault(); // prevent
  const f_name_result = validateFullName(full_name.value);
  const email_result = validateEmail(email.value);
  const note_result = validateNote(note.value);
  const address_result = validateAddress(address.value);
  const phoneNumber_result = validateAzerbaijanPhoneNumber(phoneNumber.value);

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
  // address validate

  if (!address_result) {
    address.style.borderColor = "red";
    address_error.innerHTML = "Please enter the correct Address";
  } else {
    address.style.borderColor = "green";
    address_error.innerHTML = "";
  }

  // Phone Number validate

  if (!phoneNumber_result) {
    phoneNumber.style.borderColor = "red";
    phone_error.innerHTML = "Please enter the correct Phone Number";
  } else {
    phoneNumber.style.borderColor = "green";
    phone_error.innerHTML = "";
  }

  // note validate

  if (!note_result) {
    note.style.borderColor = "red";
    note_error.innerHTML = "Please enter the correct Note";
  } else {
    note.style.borderColor = "green";
    note_error.innerHTML = "";
  }
});
