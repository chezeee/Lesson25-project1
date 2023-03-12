import FetchWrapper from "./fetch-wrapper.js";

export const getWeather = (city) => {
  const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
  );

  API.get(`/weatherstack/${city}.json`).then((data) => {
    showTemperature(data.current.temperature);
  });
};

export const result = document.querySelector("#result");
const showTemperature = (temperature) => {
  result.textContent = `It's ${temperature} degrees celsius.`;
};
