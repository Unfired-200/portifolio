// Toggle mobile menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Hamburger animation
  hamburger.classList.toggle("toggle");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});

// Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Form submission
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // In a real application, you would send this data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

    // Reset form
    this.reset();
  });
}

// Animation for skill bars when they come into view
const skillBars = document.querySelectorAll(".progress-fill");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (barPosition < screenPosition) {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
};

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.padding = "10px 0";
    header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.padding = "20px 0";
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }
});
