function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sr = ScrollReveal({
  origin: 'top',
  distance: '25px',
  duration: 1700,
  reset: true
});

sr.reveal(`.secnew,.btn-container, .socialcontainer,
          .section-container,.EXP, .text-container,
          .experience-details-container,
          .contact-info-upper-container,.certificate-container`, {
  interval: 100
});

console.log("ScrollReveal initialized");

function redirectToGoogleDrive(link) {
  window.open(link, '_blank');
}
