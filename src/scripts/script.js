const sideBar = document.getElementById("cities-list");
const menu = document.getElementsByClassName("header-navigation")[0];
const citiesSection = document.getElementById("cities");
const burguerMenu = document.getElementById("burguer-menu");
const burguerSpan = burguerMenu.querySelector("#burguer-menu span");

burguerMenu.addEventListener("click", () => {
  burguerMenu.classList.toggle("active");
  burguerSpan.classList.toggle("active");

  sideBar.classList.toggle("enter");
});

if (citiesSection && sideBar && menu) {
  const toggleColorHeader = new IntersectionObserver(
    (element) => {
      element.forEach((e) => {
        if (e.isIntersecting) {
          sideBar.classList.add("dark-theme");
          menu.classList.add("dark-theme");
        } else if (!e.isIntersecting) {
          sideBar.classList.remove("dark-theme");
          menu.classList.remove("dark-theme");
        }
      });
    },
    { threshold: 0.1 },
  );

  toggleColorHeader.observe(citiesSection);
}
