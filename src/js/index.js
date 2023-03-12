import { getWeather, result } from "./weather.js";

const citiesDropdown = document.querySelector("#cities-dropdown");
const cityName = document.querySelector("#city");

citiesDropdown.addEventListener("change", () => {
  if (citiesDropdown.value && citiesDropdown.value !== "City") {
    const city =
      citiesDropdown.value[0].toUpperCase() +
      citiesDropdown.value.slice(1, citiesDropdown.value.length);

    cityName.textContent = city;
    getWeather(citiesDropdown.value);
  } else {
    result.innerHTML = "&nbsp;";
    cityName.textContent = "...";
  }
});
