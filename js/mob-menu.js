
  const burgerBtn = document.querySelector('.burger-btn');
  const closeMobileBtn = document.querySelector('.close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  closeMobileBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

