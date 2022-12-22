const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnClick = event => {
  const accordionBtn = event.target;

  const answerPanel = accordionBtn.nextElementSibling;

  answerPanel.classList.toggle('active');
};

accordionBtnsEl.forEach(accordionBtn => {
  accordionBtn.addEventListener('click', onAccordionBtnClick);
});
