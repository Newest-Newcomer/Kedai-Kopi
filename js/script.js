// Toggle class active untuk hamburger menu.
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik maka akan ditambahkan class active pada id #hamburger-menu.
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form.
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// Untuk menampilakan .search-form ketika #search-button di klik.
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  // Untuk mengautomasi klik pada #search-box
  searchBox.focus();
  // Untuk mencegah pada saat #search-box di klik maka kembali bagian paling atas halaman(jika href="#").
  e.preventDefault();
};

// Toggle class active untuk shopping cart list
const shoppingCart = document.querySelector(".shopping-cart-list");
document.querySelector("#cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#cart-button");

// Side bar tertutup ketika klik diluar side bar.
document.addEventListener("click", function (e) {
  // Cara bacanya, jika e.target tidak ada didalam const hamburger dan tidak ada didalam const navbarNav maka.
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Untuk menghilangkan .search-form ketika di klik diluar dari #search-button dan .search-form.
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Untuk mengilangkan .shopping-cart-list ketika di klik diluar dari #cart-button dan .shopping-cart-list.
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Open Modal Box (Detail Produk)
const itemDetailModal = document.querySelector("#item-detail-modal");
const detailButtons = document.querySelectorAll(".detail-button");

detailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Untuk meng-close .#item-detail-modal ketika di klik diluar dari #item-detail-modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// Close Button Modal Box
document.querySelector(".modal .detail-close").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
