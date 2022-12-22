/*
 * Події елементів форм. focus, blur, change, input, submit
 */
const userNameInputEl = document.querySelector('.js-username-input');
const userNameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

userNameInputEl.addEventListener('focus', event => {
  console.log('Focus Event');

  userNameInputEl.style.outlineColor = 'teal';
});

userNameInputEl.addEventListener('blur', event => {
  console.log('Blur Event');
});

userNameInputEl.addEventListener('input', event => {
  console.log('Input Event');

  if (userNameInputEl.value === '') {
    userNameOutputEl.textContent = '';

    return;
  }

  userNameOutputEl.textContent = ', ' + userNameInputEl.value;
});

userNameInputEl.addEventListener('change', event => {
  console.log('Change Event');
});

checkboxEl.addEventListener('change', event => {
  console.log('Change Event on checkbox');

  if (checkboxEl.checked && userNameInputEl.value !== '') {
    submitBtnEl.removeAttribute('disabled');
  } else {
    submitBtnEl.disabled = true;
  }
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Submit Event');

  contactFormEl.reset();

  submitBtnEl.disabled = true;
  userNameOutputEl.textContent = '';
});
