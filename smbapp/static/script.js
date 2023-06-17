// Add your JavaScript interactions here
// For example, to scroll smoothly to sections when a menu link is clicked:

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  });
});
