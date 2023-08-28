const header_icon = document.querySelector(".header-icon");
const join = document.querySelector(".join");
const canc = document.querySelector(".canc");
header_icon.addEventListener("click", () => {
  join.style.display = "block";
});
canc.addEventListener("click", () => {
  join.style.display = "none";
});
console.log(header_icon);
