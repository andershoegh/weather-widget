import { WeatherAPIReponse } from "../types/WeatherData";

const PUBLIC_API_KEY = "166d00e26d3ff2c6149e89feccc5c59a";

export async function getWeatherData(city: string): Promise<WeatherAPIReponse> {
  const cityWithSpacesReplaced = city.replaceAll(" ", "+");
  const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityWithSpacesReplaced},dk&appid=${PUBLIC_API_KEY}&units=metric&lang={dk}`;

  try {
    const res = await fetch(getWeatherURL);

    if (!res.ok) {
      // Send error to error monitoring service.
      switch (res.status) {
        case 401:
          return { status: res.status, errorType: "InvalidAPI" };
        case 404:
          return {
            status: res.status,
            errorType: "UnknownLocation",
          };
        case 429:
          return {
            status: res.status,
            errorType: "HighLoad",
          };
        default:
          return { status: res.status, errorType: "UnknownError" };
      }
    }

    const weatherData = await res.json();

    return {
      humidity: weatherData.main.humidity,
      temperature: weatherData.main.temp,
      windSpeed: weatherData.wind.speed,
      windDegree: weatherData.wind.deg,
    };
  } catch (error) {
    return { errorType: "UnknownError" };
  }
}
