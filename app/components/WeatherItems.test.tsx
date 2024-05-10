import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WeatherItems } from "./WeatherItems";
import { Suspense } from "react";

describe("WeatherItems", () => {
  it("render the weather information", async () => {
    const resolvedComponent = await WeatherItems({
      weatherData: {
        humidity: 20,
        temperature: 20,
        windDegree: 20,
        windSpeed: 20,
      },
      city: "aalborg",
    }); // workaround for unit testing async nextjs components
    render(resolvedComponent);

    const listItems = screen.getAllByRole("listitem");

    const expectedTextContent = [
      "Temperature: 20",
      "Humidity: 20",
      "Wind: 20.0 m/s - Nord",
    ];
    listItems.forEach((item, idx) => {
      expect(item.textContent).toBe(expectedTextContent[idx]);
    });
  });
});
