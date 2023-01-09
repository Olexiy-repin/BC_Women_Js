const timer = {
  deadline: new Date(2023, 0, 9, 12, 58),
  intervalId: null,
  rootSelector: document.querySelector('.js-timer-items'),

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.rootSelector.querySelector('.js-timer__days').textContent =
        this.pad(days);
      this.rootSelector.querySelector('.js-timer__hours').textContent =
        this.pad(hours);
      this.rootSelector.querySelector('.js-timer__minutes').textContent =
        this.pad(minutes);
      this.rootSelector.querySelector('.js-timer__seconds').textContent =
        this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, 0);
  },
};

timer.start();

// declensionNum(num, words) {
//   return words[
//     num % 100 > 4 && num % 100 < 20
//       ? 2
//       : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//   ];
// }
