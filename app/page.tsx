import { WeatherItems } from "./components/WeatherItems";
import { CitySearchInput } from "./components/CitySearchInput";
import { getWeatherData } from "./api/getWeatherData";
import { WidgetHeader } from "./components/WidgetHeader";
import { isWeatherDataError } from "./types/WeatherData";
import { NoWeatherDataError } from "./components/NoWeatherDataError";

export default async function Home(params: {
  searchParams: { city?: string };
}) {
  let city = params.searchParams.city || "Copenhagen";

  const weatherData = await getWeatherData(city);

  return (
    <div
      className="widget"
      style={{
        margin: "10px",
        width: "300px",
      }}
    >
      <div className="panel panel-info">
        <WidgetHeader city={city} />
        <ul className="list-group">
          {isWeatherDataError(weatherData) ? (
            <NoWeatherDataError city={city} error={weatherData} />
          ) : (
            <WeatherItems weatherData={weatherData} city={city} />
          )}

          <CitySearchInput key={city} />
        </ul>
      </div>
    </div>
  );
}
