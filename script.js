// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Navbar nav di click
document.querySelector(".navbar-nav").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika hamburger menu diclick
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Typed Animation
let typed = new Typed("#typed", {
  strings: [
    "Ui/Ux Mobile Designer",
    "Ui/Ux Web Designer",
    "Graphic Designer",
    "Video Editor",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 2000,
  loop: true,
});
