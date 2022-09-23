function toggleNav() {
  let nav = document.getElementById("nav");
  nav.classList.toggle("site-nav-open");
}

let button = document.getElementById("navToggle");
button.addEventListener("click", toggleNav);


