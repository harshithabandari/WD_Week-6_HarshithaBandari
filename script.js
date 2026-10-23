const skills = [
  { name: "C", group: "Programming", icon: "⌘" },
  { name: "Python", group: "Programming", icon: "⌨" },
  { name: "SQL", group: "Database", icon: "▤" },
  { name: "HTML", group: "Web", icon: "◇" },
  { name: "CSS", group: "Web", icon: "✳" },
  { name: "Git", group: "Version control", icon: "⑂" },
  { name: "GitHub", group: "Version control", icon: "◉" }
];

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "web",
    kind: "Web development",
    year: "Portfolio",
    description: "A responsive personal website presenting my skills, education, project, and contact details.",
    technologies: ["HTML", "CSS"],
    art: "portfolio-art"
  },
  {
    title: "Interactive Portfolio Refresh",
    category: "learning",
    kind: "Current learning project",
    year: "In progress",
    description: "An updated portfolio built to practice responsive layouts, JavaScript, DOM updates, and accessible interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    art: "learning-art"
  }
];

const skillsGrid = document.querySelector("#skills-grid");
const projectsGrid = document.querySelector("#projects-grid");
const searchInput = document.querySelector("#project-search");
const emptyMessage = document.querySelector("#empty-message");
let activeFilter = "all";

skills.forEach((skill) => {
  const card = document.createElement("article");
  card.className = "skill-card";
  card.innerHTML = `<span class="skill-icon" aria-hidden="true">${skill.icon}</span><h3>${skill.name}</h3><p>${skill.group}</p>`;
  skillsGrid.append(card);
});

function renderProjects() {
  const query = searchInput.value.trim().toLowerCase();
  const matchingProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const searchableText = `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();
    return matchesFilter && searchableText.includes(query);
  });

  projectsGrid.replaceChildren();
  matchingProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const artClass = project.category === "learning" ? "learning-art" : "";
    const tags = project.technologies.map((technology) => `<span>${technology}</span>`).join("");
    card.innerHTML = `
      <div class="project-art ${artClass}" aria-hidden="true">
        <div class="mini-browser">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-line"></div>
          <div class="browser-line short"></div>
          <div class="browser-line short"></div>
          <div class="browser-pills"><span></span><span></span><span></span></div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-topline"><span class="project-type">${project.kind}</span><span class="project-year">${project.year}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-list">${tags}</div>
      </div>`;
    projectsGrid.append(card);
  });
  emptyMessage.hidden = matchingProjects.length > 0;
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderProjects();
  });
});

searchInput.addEventListener("input", renderProjects);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  });
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
  const body = encodeURIComponent(
    `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`
  );
  const mailto = `mailto:harshitha.bandari02@gmail.com?subject=${subject}&body=${body}`;
  const feedback = document.querySelector("#form-feedback");
  feedback.replaceChildren(document.createTextNode("Your email is ready. "));
  const emailLink = document.createElement("a");
  emailLink.href = mailto;
  emailLink.textContent = "Open your email app";
  feedback.append(emailLink);
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
