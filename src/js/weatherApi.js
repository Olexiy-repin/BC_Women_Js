export const fetchWeather = cityName => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ua&appid=95632b02f9162f375a368971925f5209`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
