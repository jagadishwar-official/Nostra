// Offer Bar Close logic
const offerBar = document.getElementById("offerBar");
if (offerBar) {
  const closeOffer = document.getElementById("closeOffer");
  if (closeOffer) {
    closeOffer.addEventListener("click", function () {
      offerBar.style.display = "none";
    });
  }
}

// Mobile Menu Toggle logic
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}

// Contact Form Submission Handler
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent full page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent successfully.");
      contactForm.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
}
