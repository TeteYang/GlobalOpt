const cross = document.querySelector('.cross');
const item = document.querySelector('.item');
const navbarToggler = document.querySelector('.navbar-toggler');

cross.addEventListener('click', () => {
  item.style.display = 'none';
})

navbarToggler.addEventListener('click', () => {
  item.style.display = 'block';
})

