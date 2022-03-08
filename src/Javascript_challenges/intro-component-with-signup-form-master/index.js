const form = document.querySelector("form")
const inputs = document.querySelectorAll(".input-field");
const sign_up_btn = document.querySelector(".sign-up-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
})

function formValidation() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  inputs.forEach((input) => {
    let index = input.dataset.value;
    let warning = document.querySelector(`.warning-${index}`);
    let label = document.querySelector(`.label-${index}`) 
    if (input.value.trim() === "") {
      input.classList.add("failed");
      warning.textContent = `${label.textContent} cannot be empty`
    }
    else if (index === "3" && !regex.test(input.value)){
      input.classList.add("failed");
      warning.textContent = "Looks like this is not an email";
    }
  });
  events();
}

sign_up_btn.addEventListener("click", formValidation);

function events() {
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.add("active");
    });
    input.addEventListener("blur", () => {
      if (input.value.trim() != "") {
        input.classList.remove("failed");
        return;
       };
      input.classList.remove("active");
    });
  });
}

events();