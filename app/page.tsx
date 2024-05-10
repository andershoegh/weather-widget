import { CitySearchInput } from "./CitySearchInput";
import { WeatherDisplay } from "./WeatherDisplay";

export default async function Home(params: {
  searchParams: { city?: string };
}) {
  let { city } = params.searchParams;

  if (!city) {
    city = "København";
  }

  return (
    <div
      className="widget"
      style={{ margin: "10px", width: "300px", backgroundColor: "#" }}
    >
      <WeatherDisplay city={city} />
    </div>
  );
}
