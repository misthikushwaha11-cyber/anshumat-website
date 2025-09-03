// Smooth scroll for navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    // ...skip internal section
    if (link.getAttribute("href").includes(".html")) return;

    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submit alert
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}

// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});
