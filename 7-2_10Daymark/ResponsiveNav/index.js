(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-links a");
  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOverlay.classList.add("show");
      menuOverlay.style.display = "flex";
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOverlay.classList.remove("show");
      menuOverlay.style.display = "none";
      menuOpen = false;
    }
  });
  mobileLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkDropDown 0.5s ease-in ${index / 9}s`;
      link.style.opacity = 1;
    }
  });
})();
