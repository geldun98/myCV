const menuToggle = document.querySelector(".header-bars");
const menu = document.querySelector(".header-menu-list");
const modal = document.querySelector(".check-modal");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menu.classList.add(expandClass);
  modal.classList.add("modal");
});
window.addEventListener("click", function (e) {
  if (
    (!menu.contains(e.target) && !e.target.matches(".header-bars")) ||
    e.target.matches(".header-menu-link")
  ) {
    menu.classList.remove(expandClass);
    modal.classList.remove("modal");
  }
});
