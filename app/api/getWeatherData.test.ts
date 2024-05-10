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
});
