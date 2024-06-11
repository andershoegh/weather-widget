import React from "react";
import { WeatherDataError } from "../types/WeatherData";

const getErrorMessage = (
  errorType: WeatherDataError["errorType"],
  city: string
) => {
  switch (errorType) {
    case "HighLoad":
      return "Our weather service is under high load - please try again later.";
    case "InvalidAPI":
      return "There was an internal error with the weather service - please try again later.";
    case "UnknownLocation":
      return `We could not find any weather information for the city ${city}`;
    case "UnknownError":
      return "We encountered an unknown error - please try again later.";
  }
};

export const NoWeatherDataError = ({
  city,
  error,
}: {
  city: string;
  error: WeatherDataError;
}) => {
  const errorMessage = getErrorMessage(error.errorType, city);
  return (
    <div className="panel-heading" data-testid="noWeatherDataErrorComponent">
      {errorMessage}
    </div>
  );
};
