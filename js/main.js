const menu = document.querySelector(".navbar-icon");
const list = document.querySelector(".navbar");
const navItem = document.querySelectorAll(".navbar-item");

menu.addEventListener("click", function () {
  list.classList.add("active");

  if (menu.classList.contains("active")) {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times-circle");
    menu.classList.remove("active");
    list.classList.remove("active");
  } else {
    menu.classList.add("active");
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-times-circle");
  }
});

for (item of navItem) {
  item.addEventListener("click", function () {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times-circle");
    menu.classList.remove("active");
    list.classList.remove("active");
  });
}

//Scroll
var sections = document.querySelectorAll("section");
onscroll = function () {
  var top = document.documentElement.scrollTop;

  sections.forEach((section) => {
    var height = section.offsetHeight;
    var offset = section.offsetTop - 100;
    if (top > offset && top < offset + height) {
      activeItem(section.id);
    }
  });
};
function activeItem(id) {
  for (item of navItem) {
    item.classList.remove("active-color");
  }
  document.querySelector(`a[href='#${id}']`).classList.add("active-color");
}
