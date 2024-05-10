import React from "react";
import { degreesToDirection } from "../utils/degreesToDirection";
import { WeatherData } from "../api/getWeatherData";
import { NoWeatherDataError } from "./NoWeatherDataError";

export const WeatherItems = async ({
  city,
  weatherData,
}: {
  city: string;
  weatherData?: WeatherData;
}) => {
  if (!weatherData) {
    return <NoWeatherDataError city={city} />;
  }
  const { humidity, temperature, windDegree, windSpeed } = weatherData;
  return (
    <>
      <li className="list-group-item">
        Temperature: <b>{temperature}</b>
      </li>
      <li className="list-group-item">
        Humidity: <b>{humidity}</b>
      </li>
      <li className="list-group-item">
        Wind:{" "}
        <b>
          {windSpeed.toFixed(1)} m/s - {degreesToDirection(windDegree)}
        </b>
      </li>
    </>
  );
};
