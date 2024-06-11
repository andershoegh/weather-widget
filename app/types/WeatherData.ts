export type WeatherData = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
};

type WeatherErrorType =
  | "UnknownError"
  | "InvalidAPI"
  | "UnknownLocation"
  | "HighLoad";

export type WeatherDataError = {
  errorType: WeatherErrorType;
  status?: number;
};

export type WeatherAPIReponse = WeatherData | WeatherDataError;

export function isWeatherDataError(
  weatherData: WeatherData | WeatherDataError
): weatherData is WeatherDataError {
  return (weatherData as WeatherDataError).errorType !== undefined;
}
