const hamburgerBtn = document.querySelector(".hamburger");
const absolute = document.querySelector(".absolute");
const cancel = document.querySelector(".cancel");
const nav_list = document.querySelector(".nav-list");
hamburgerBtn.addEventListener("click", () => {
  absolute.style.display = "block";
  nav_list.style.display = "flex";
  nav_list.style.right = "17px";
});

cancel.addEventListener("click", () => {
  absolute.style.display = "none";
  nav_list.style.right = "-400px";
});
window.addEventListener("resize", function (event) {
  document.body.clientWidth > 742 && (absolute.style.display = "none");
});
