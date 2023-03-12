export const getWeather = (city) => {
  // your code
};

// Do NOT modify the code below
const result = document.querySelector("#result");
const showTemperature = (temperature) => {
  result.textContent = `It's ${temperature} degrees celsius.`;
};
