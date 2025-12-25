const header = document.querySelector('.site-header');

let isShrunk = false;

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  if (!isShrunk && y > 120) {
    header.classList.add('shrunk');
    isShrunk = true;
  } else if (isShrunk && y < 60) {
    header.classList.remove('shrunk');
    isShrunk = false;
  }
});
