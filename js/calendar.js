const calendarBodyEl = document.querySelector('.js-calendar-body');
let prevCalendarItemEl = null;

const onCalendarItemElClick = event => {
  const { target } = event;

  if (target.textContent === '') {
    return;
  }

  if (target === prevCalendarItemEl) {
    target.classList.toggle('active');

    return;
  }

  if (prevCalendarItemEl !== null) {
    prevCalendarItemEl.classList.remove('active');
  }

  target.classList.add('active');
  prevCalendarItemEl = target;
};

calendarBodyEl.addEventListener('click', onCalendarItemElClick);
