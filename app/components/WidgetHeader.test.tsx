import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WidgetHeader } from "./WidgetHeader";

describe("WidgetHeader", () => {
  it("shows the passed city", async () => {
    const Resolved = await WidgetHeader({ city: "mockCity" });
    render(Resolved);

    expect(screen.getByRole("paragraph").textContent).toBe(
      "Weather in mockCity"
    );
  });
});
