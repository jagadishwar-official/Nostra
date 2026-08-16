
const offerBar = document.getElementById("offerBar");
document.getElementById("closeOffer").addEventListener("click", function () {
  offerBar.style.display = "none";
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;
function showHeroSlide(index) {
  heroSlides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  heroSlides[index].classList.add("active");
}
document.getElementById("heroNext").addEventListener("click", function () {
  heroIndex++;
  if (heroIndex >= heroSlides.length) heroIndex = 0;
  showHeroSlide(heroIndex);
});
document.getElementById("heroPrev").addEventListener("click", function () {
  heroIndex--;
  if (heroIndex < 0) heroIndex = heroSlides.length - 1;
  showHeroSlide(heroIndex);
});

const wantedTrack = document.getElementById("wantedTrack");
document.getElementById("mwRight").addEventListener("click", function () {
  wantedTrack.scrollBy({ left: 360, behavior: "smooth" });
});
document.getElementById("mwLeft").addEventListener("click", function () {
  wantedTrack.scrollBy({ left: -360, behavior: "smooth" });
});

document.querySelectorAll(".heart-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("active");
    const icon = button.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });
});

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("emailInput");
  const message = document.getElementById("newsletterMessage");

  if (email.value === "") {
    message.textContent = "Please enter your email.";
    return;
  }

  message.textContent = "Thank you for subscribing!";
  email.value = "";
});

mobileMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});
