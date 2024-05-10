const PUBLIC_API_KEY = "166d00e26d3ff2c6149e89feccc5c59a";

export type WeatherData = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
};

export async function getWeatherData(
  city: string
): Promise<WeatherData | undefined> {
  const cityWithSpacesReplaced = city.replaceAll(" ", "+");
  const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityWithSpacesReplaced},dk&appid=${PUBLIC_API_KEY}&units=metric&lang={dk}`;
  const res = await fetch(getWeatherURL);

  if (!res.ok) {
    return undefined;
  }

  const weatherData = await res.json();

  return {
    humidity: weatherData.main.temp,
    temperature: weatherData.main.temp,
    windSpeed: weatherData.wind.speed,
    windDegree: weatherData.wind.deg,
  };
}
