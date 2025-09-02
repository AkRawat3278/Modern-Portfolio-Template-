// Collapse navbar after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});