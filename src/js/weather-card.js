export const createWeatherCard = cardInfo => {
  return `
    <div class="weather__card">
      <h2 class="city-name">${cardInfo.name}</h2>
      <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: ${cardInfo.main.temp}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Відчувається як: ${cardInfo.main.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${cardInfo.sys.sunrise}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${cardInfo.sys.sunset}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Хмарність: ${cardInfo.clouds.all}%</p>
        </li>
      </ul>
    </div>
  `;
};
