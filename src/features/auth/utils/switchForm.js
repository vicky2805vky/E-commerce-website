export const switchForm = (inset, type) => {
  const formContainer = document.querySelector(".form-container");
  const forms = document.querySelectorAll(".form");
  const titles = document.querySelectorAll(".title-text");
  const switchIndicators = document.getElementById("switch-indicator");

  if (type === "login") {
    forms[0].classList.remove("form-active");
    forms[1].classList.add("form-active");
    forms[2].classList.remove("form-active");

    titles[0].classList.remove("form-active");
    titles[1].classList.add("form-active");
    titles[2].classList.remove("form-active");

    formContainer.style.height = "250px";
  } else if (type === "sign up") {
    forms[0].classList.add("form-active");
    forms[1].classList.remove("form-active");
    forms[2].classList.remove("form-active");

    titles[0].classList.add("form-active");
    titles[1].classList.remove("form-active");
    titles[2].classList.remove("form-active");

    formContainer.style.height = "300px";
  } else {
    forms[0].classList.add("form-active");
    forms[1].classList.add("form-active");
    forms[2].classList.add("form-active");

    titles[0].classList.add("form-active");
    titles[1].classList.add("form-active");
    titles[2].classList.add("form-active");

    formContainer.style.height = "150px";
  }
  switchIndicators.style.inset = inset;
};
