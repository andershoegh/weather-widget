import { CitySearchInput } from "./CitySearchInput";
import { degreesToDirection } from "./utils/degreesToDirection";

const PUBLIC_API_KEY = "166d00e26d3ff2c6149e89feccc5c59a";

async function getData(city: string): Promise<{
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
}> {
  const cityWithSpacesReplaced = city.replaceAll(" ", "+");
  const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityWithSpacesReplaced},dk&appid=${PUBLIC_API_KEY}&units=metric&lang={dk}`;
  const res = await fetch(getWeatherURL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const weatherData = await res.json();

  return {
    humidity: weatherData.main.temp,
    temperature: weatherData.main.temp,
    windSpeed: weatherData.wind.speed,
    windDegree: weatherData.wind.deg,
  };
}

type Props = {
  city: string;
};

export async function WeatherDisplay({ city }: Props) {
  const { humidity, temperature, windDegree, windSpeed } = await getData(city);

  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        Weather in <b style={{ textTransform: "capitalize" }}>{city}</b>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          Temperature: <b>{temperature}</b>
        </li>
        <li className="list-group-item">
          Humidity: <b>{humidity}</b>
        </li>
        <li className="list-group-item">
          Wind:{" "}
          <b>
            {windSpeed} m/s {degreesToDirection(windDegree)}
          </b>
        </li>
        <CitySearchInput />
      </ul>
    </div>
  );
}
