const button = document.getElementsByClassName("cities-btn")[0];
const citiesList = document.getElementById("cities-list");
const menu = document.getElementsByClassName("header-navigation")[0];
const citiesSection = document.getElementById("cities");

button.addEventListener("click", () => {
  citiesList.classList.toggle("enter"); 
}); 

const observer = new IntersectionObserver( 
  (element) => {
    element.forEach((e) => {
      if (e.isIntersecting) { 
        citiesList.classList.add("dark-theme");
        menu.classList.add("dark-theme");
      } else if(!e.isIntersecting){
        citiesList.classList.remove("dark-theme");
        menu.classList.remove("dark-theme");
      }
    });
  },
  { threshold: 0.2 },
);

observer.observe(citiesSection);
