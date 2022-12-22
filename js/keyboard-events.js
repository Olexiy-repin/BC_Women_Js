/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keydown', event => {
  console.log(`event.code: ${event.code}, event.key: ${event.key}`);

  if (event.code === 'KeyS') {
    console.log('Hello!');
  }
});
