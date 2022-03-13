const burger = document.querySelector("#burger");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
const close = document.querySelector("#close");
const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.getElementsByClassName("tabcontent");

console.log(tablinks);
burger.addEventListener("click", () => {
  mobileNav.classList.remove("hide");
  burger.style.display = "none";
  close.style.display = "flex";
});
close.addEventListener("click", () => {
  mobileNav.classList.add("hide");
  burger.style.display = "flex";
  close.style.display = "none";
});

//sliders
function showTabContent(evt, name) {
  // Declare all variables

  // Get all elements with class="tabcontent" and hide them
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(name).style.display = "block";
  // evt.currentTarget.className += " show";
  evt.currentTarget.className += " active";
}