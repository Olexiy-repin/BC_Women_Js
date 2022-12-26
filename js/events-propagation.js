/*
 * Поширення подій (занурення, таргетинг, спливання)
 */
const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const pEl = document.querySelector('.js-text');

sectionEl.addEventListener('click', event => {
  console.group('AddEventListener on Section');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener('click', event => {
  console.group('AddEventListener on Div');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

pEl.addEventListener('click', event => {
  console.group('AddEventListener on P');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});
