import { describe, expect, it } from "vitest";
import { degreesToDirection } from "./degreesToDirection";

describe("DegreeToDirection", () => {
  it.each([
    { degree: 0, direction: "Nord" },
    { degree: 10, direction: "Nord" },
    { degree: 30, direction: "Nord-øst" },
    { degree: 100, direction: "Øst" },
    { degree: 150, direction: "Syd-øst" },
    { degree: 200, direction: "Syd" },
    { degree: 240, direction: "Syd-vest" },
    { degree: 290, direction: "Vest" },
    { degree: 320, direction: "Nord-vest" },
    { degree: 350, direction: "Nord" },
    { degree: 360, direction: "Nord" },
  ])("$degree should return $direction", ({ degree, direction }) => {
    const result = degreesToDirection(degree);
    expect(result).toBe(direction);
  });
});
