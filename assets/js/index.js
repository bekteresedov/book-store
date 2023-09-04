import { validateNote } from "./validation.js";
const catalogBtn = document.getElementById("catalog");

catalogBtn.onclick = function () {
  window.location.pathname = "/assets/pages/catalog.html";
};

console.log(validateNote("phoneNumber"));
