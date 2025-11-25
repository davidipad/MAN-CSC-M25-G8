document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active");

      const spans = menuToggle.querySelectorAll("span");
      if (navLinksContainer.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
        menuToggle.style.position = "fixed";
        menuToggle.style.right = "25px";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
        menuToggle.style.position = "static";
      }
    });
  }

  const detailButtons = document.querySelectorAll(".details-button");
  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.getAttribute("data-details");
      alert(details);
    });
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();

      if (name) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }
});
