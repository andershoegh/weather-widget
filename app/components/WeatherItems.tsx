import React from "react";
import { degreesToDirection } from "../utils/degreesToDirection";

import { NoWeatherDataError } from "./NoWeatherDataError";
import { WeatherData } from "../types/WeatherData";

export const WeatherItems = async ({
  city,
  weatherData,
}: {
  city: string;
  weatherData: WeatherData;
}) => {
  const { humidity, temperature, windDegree, windSpeed } = weatherData;
  return (
    <>
      <li className="list-group-item">
        Temperature: <b>{temperature.toFixed(0)}&deg;C</b>
      </li>
      <li className="list-group-item">
        Humidity: <b>{humidity.toFixed(0)}</b>
      </li>
      <li className="list-group-item">
        Wind:{" "}
        <b>
          {windSpeed.toFixed(0)} m/s - {degreesToDirection(windDegree)}
        </b>
      </li>
    </>
  );
};
