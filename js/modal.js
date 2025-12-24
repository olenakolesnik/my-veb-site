
  const openBtn = document.querySelector('.open-modal-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const backdrop = document.querySelector('.backdrop');
  const loginForm = document.querySelector(`.login-form`);

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
loginForm.addEventListener(`submit`, handlSubmit);
function handlSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  clearErrors(form);

  let isValid = true;

  if (!emailInput.value.trim()) {
    showError(emailInput, "Введіть email");
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    showError(passwordInput, "Введіть пароль");
    isValid = false;
  }
  if (!isValid) return;
}
function showError(input, message) {
  input.classList.add("error");
  const errorEl = input.parentElement.querySelector(".form-error");
  errorEl.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll(".form-error").forEach(el => {
    el.textContent = "";
  });

  form.querySelectorAll(".form-input").forEach(el => {
    el.classList.remove("error");
  });
}


//   if (email === "" || password === "") {
//     alert("Будь ласка заповніть усі поля");
//     return;
//   }
//   console.log(`Email: ${email}, Password: ${password}`);
  
//   event.target.reset();
// }

