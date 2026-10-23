const themeButton = document.querySelector("#theme-button");
const themeLabel = document.querySelector("#theme-label");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.querySelector("#empty-message");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleProjects = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    projectCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !shouldShow;
      if (shouldShow) {
        visibleProjects += 1;
      }
    });

    emptyMessage.hidden = visibleProjects > 0;
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const name = new FormData(contactForm).get("name").trim();
  formStatus.textContent = `Thanks, ${name}! Your demo message passed validation.`;
  contactForm.reset();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
