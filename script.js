const loginForm = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit');

let CRM_LC = [
  {
    email: 'admin@domain.com',
    password: 'password123',
  },
  {
    email: 'admin@mail.ru',
    password: 'admin1234',
  },
];

loginForm.addEventListener('input', () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue.length > 0 && passwordValue.length > 6) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});

email.onkeydown = () => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
  const validationText = document.getElementById('validationText');

  if (pattern.test(email.value)) {
    validationText.innerHTML = 'Your Email address in Valid.';
    validationText.style.color = '#00ff00';
  } else {
    validationText.innerHTML = 'Please Enter Valid Email Address';
    validationText.style.color = '#ff0000';
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitTextValidation = document.getElementById('text');

  for (i = 0; i < CRM_LC.length; i++) {
    if (email.value == CRM_LC[i].email && password.value == CRM_LC[i].password) {
      submitTextValidation.innerHTML = 'Is logged in!';
      submitTextValidation.style.color = '#00ff00';
      console.log(email.value);
      console.log(password.value);
      return
    }
  }
  submitTextValidation.innerHTML = 'incorrect email or password';
  submitTextValidation.style.color = '#ff0000';
});
