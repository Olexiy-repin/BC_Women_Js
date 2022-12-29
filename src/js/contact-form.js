import localStorageService from './localstorage.js';

const contactFormEl = document.querySelector('.js-contact-form');
const userInfo = {};

const fillContactFormFields = () => {
  const userInfoFromLS = localStorageService.load('userData');

  if (userInfoFromLS === undefined) {
    return;
  }

  for (const prop in userInfoFromLS) {
    contactFormEl.elements[prop].value = userInfoFromLS[prop];
  }
};

fillContactFormFields();

const onContactFormFieldChange = event => {
  const { target } = event;

  const fieldValue = target.value;
  const fieldName = target.name;

  userInfo[fieldName] = fieldValue;

  localStorageService.save('userData', userInfo);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorageService.remove('userData');
};

contactFormEl.addEventListener('change', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
