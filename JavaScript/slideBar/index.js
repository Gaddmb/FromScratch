const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", function () {
  sideBar.classList.toggle("active");
});

content.addEventListener("click", function () {
  sideBar.classList.remove("active");
});
