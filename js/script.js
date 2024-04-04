// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Side bar tertutup ketika klik diluar side bar.
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  // Cara bacanya, jika e.target tidak ada didalam const hamburger dan tidak ada didalam const navbarNav maka.
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
