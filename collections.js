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

// Product Search & Tag Filtering Logic
const searchBar = document.getElementById("search-bar");
const productContainer = document.getElementById("product-list");
const productCards = productContainer ? productContainer.querySelectorAll(".product-card") : [];
const checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');

function filterProducts() {
  const searchVal = searchBar ? searchBar.value.toUpperCase() : "";
  const selectedTags = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  productCards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toUpperCase();
    const cardTags = card.getAttribute("data-tags").split(" ");

    // Intersection logic: search query matches AND (no tags selected OR at least one selected tag matches)
    const matchesSearch = name.indexOf(searchVal) > -1;
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => cardTags.includes(tag));

    if (matchesSearch && matchesTags) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Event Listeners
if (searchBar) {
  searchBar.addEventListener("keyup", filterProducts);
}

checkboxes.forEach((cb) => {
  cb.addEventListener("change", filterProducts);
});
