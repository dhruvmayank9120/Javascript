document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;

  function updateTemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's temperature: ${data.current.temp_c}°C`;
  }

  const prom = fetch(
    `http://api.weatherapi.com/v1/current.json?key=d5fe5c28361f44f7a80231808260702&q=${place}&aqi=yes`,
  );

  prom.then((response) => response.json()).then((data) => updateTemp(data));
});
