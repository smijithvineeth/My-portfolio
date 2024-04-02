function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sr = ScrollReveal({
  origin: 'top',
  distance: '35px',
  duration: 2000,
  reset: true
});

sr.reveal(`.secnew,.btn-container, .socialcontainer,
          .section-container,.EXP, .text-container,
          .article-container,.experience-sub-title project-title,btn-container
          .contact-info-upper-container,.certificate-container`, {
  interval: 10
});

console.log("ScrollReveal initialized");

function redirectToGoogleDrive(link) {
  window.open(link, '_blank');
}
