const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const onDocumentScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800) {
    document.querySelector('.js-animated-section').classList.add('active');

    document.removeEventListener('scroll', onDocumentScrollThrottled);
  }
};

const onDocumentScrollThrottled = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', onDocumentScrollThrottled);
