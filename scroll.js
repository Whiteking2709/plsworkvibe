const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-70px'; // Adjust the height of your navbar as needed
  }

  prevScrollPos = currentScrollPos;
});