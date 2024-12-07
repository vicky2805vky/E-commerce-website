export const switchForm = (inset, type) => {
  const formContainer = document.querySelector(".form-container");
  const forms = document.querySelectorAll(".form");
  const titles = document.querySelectorAll(".title-text");
  const switchIndicators = document.getElementById("switch-indicator");

  const formTypes = {
    login: 0,
    signup: 1,
    changePassword: 2,
  };
  const formContainerHeights = [250, 280, 150];

  const activeForm = formTypes[type];

  forms[activeForm].classList.remove("hidden");

  titles[activeForm].classList.add("form-active");

  setTimeout(() => {
    forms[activeForm].classList.add("form-active");
  }, 15); // For transition to work properly

  for (const key in formTypes) {
    if (formTypes[key] !== activeForm) {
      titles[formTypes[key]].classList.remove("form-active");
      forms[formTypes[key]].classList.remove("form-active");

      setTimeout(() => {
        forms[formTypes[key]].classList.add("hidden");
      }, 500);
    }
  }

  formContainer.style.height = `${formContainerHeights[activeForm]}px`;
  switchIndicators.style.inset = inset;
};
