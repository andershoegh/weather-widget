import { describe, expect, it, vi } from "vitest";
import { getWeatherData } from "./getWeatherData";

describe("getWeatherData", () => {
  it("is called with the correct url", async () => {
    const fetchMock = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            main: { temp: 10 },
            wind: { speed: 10, deg: 180 },
          }),
      })
    );
    global.fetch = fetchMock as any;

    await getWeatherData("copenhagen");

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openweathermap.org/data/2.5/weather?q=copenhagen,dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric&lang={dk}"
    );
  });

  it.each([
    { status: 401, errorType: "InvalidAPI" },
    { status: 404, errorType: "UnknownLocation" },
    { status: 429, errorType: "HighLoad" },
    { status: null, errorType: "UnknownError" },
  ])(
    "$status should give error type $errorType",
    async ({ errorType, status }) => {
      const fetchMock = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status,
        })
      );
      global.fetch = fetchMock as any;

      const response = await getWeatherData("aalborg");

      expect(response).toEqual({
        status,
        errorType,
      });
    }
  );
});
