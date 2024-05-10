import Image from "next/image";
import styles from "./page.module.css";

const API_KEY = "166d00e26d3ff2c6149e89feccc5c59a";

async function getData(city: string): Promise<{
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
}> {
  const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}&units=metric`;
  const res = await fetch(getWeatherURL);

  console.log(res.status);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
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

export default async function Home(params: {
  searchParams: { city?: string };
}) {
  const { city } = params.searchParams;

  if (!city) return null;

  const { humidity, temperature, windDegree, windSpeed } = await getData(city);
  return (
    <div
      className="widget"
      style={{ margin: "10px", width: "300px", backgroundColor: "#" }}
    >
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
              {windSpeed} m/s ({windDegree} DEGREE)
            </b>
          </li>
          <li className="list-group-item">
            <form className="form-inline">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Search (TO DO)
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
