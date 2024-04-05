// Toggle class active untuk hamburger menu.
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik maka akan ditambahkan class active pada id #hamburger-menu.
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
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

// Side bar tertutup ketika klik diluar side bar.
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  // Cara bacanya, jika e.target tidak ada didalam const hamburger dan tidak ada didalam const navbarNav maka.
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Untuk menghilangkan .search-form ketika di klik diluar dari #search-button dan .search-form.
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
