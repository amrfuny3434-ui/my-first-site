const select = document.getElementById("city");
const btn = document.getElementById("getWeather");
const output = document.getElementById("output");

async function getWeather() {
  const parts = select.value.split(",");
  const lat = parts[0];
  const lon = parts[1];

  output.textContent = "جاري التحميل...";

  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
      "&longitude=" + lon +
      "&current=temperature_2m,wind_speed_10m,relative_humidity_2m";

    const response = await fetch(url);
    const data = await response.json();
    const current = data.current;

    output.textContent =
      "درجة الحرارة: " + current.temperature_2m + " °م\n" +
      "سرعة الرياح: " + current.wind_speed_10m + " كم/س\n" +
      "الرطوبة: " + current.relative_humidity_2m + "%";
  } catch (error) {
    output.textContent = "حصلت مشكلة في الاتصال، جرّب تاني.";
  }
}

btn.addEventListener("click", getWeather);