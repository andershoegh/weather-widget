import React from "react";

export const NoWeatherDataError = ({ city }: { city: string }) => {
  return (
    <div className="panel-heading" data-testid="noWeatherDataErrorComponent">
      Sorry! We could not find any weather data for the city{" "}
      <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
        {city}
      </span>
      . Please search for another city.
    </div>
  );
};
