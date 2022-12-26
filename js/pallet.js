const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const firstPalletItemEl = document.querySelector('.js-pallet > li');

console.dir(firstPalletItemEl);

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.elementColor = color;
  });
};

paintElements();

const onPalletItemElClick = event => {
  const { target } = event;

  if (target.nodeName !== 'LI') {
    return;
  }

  const color = target.dataset.elementColor;
  const outputColorEl = target.querySelector('.js-pallet__item-color');

  outputColorEl.textContent = color;

  // target.querySelector('.js-pallet__item-color').textContent = target.style.backgroundColor;
};

palletEl.addEventListener('click', onPalletItemElClick);
