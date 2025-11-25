document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

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
