import { WeatherItems } from "./components/WeatherItems";
import { CitySearchInput } from "./components/CitySearchInput";
import { getWeatherData } from "./api/getWeatherData";
import { WidgetHeader } from "./components/WidgetHeader";

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
          <WeatherItems weatherData={weatherData} city={city} />
          <CitySearchInput key={city} />
        </ul>
      </div>
    </div>
  );
}
