// https://openweathermap.org/current
import { fetchWeather } from './weatherApi.js';
import { createWeatherCard } from './weather-card.js';

const searchFormEl = document.querySelector('.js-search-form');
const weatherCardEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${new String(date.getHours()).padStart(2, 0)}:${new String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.target.elements.user_country.value.trim();

  fetchWeather(searchedQuery)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

      weatherCardEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      switch (err.message) {
        case '404': {
          alert('За вашим запитом нічого не знайдено!');
          break;
        }
      }
    })
    .finally(() => {
      event.target.reset();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
