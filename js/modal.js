
  const openBtn = document.querySelector('.open-modal-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const backdrop = document.querySelector('.backdrop');

  openBtn.addEventListener('click', () => {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

