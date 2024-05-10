import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CitySearchInput } from "./CitySearchInput";

describe("CitySearchInput", () => {
  it("renders the input field", () => {
    render(<CitySearchInput />);
    screen.getByRole("textbox", { name: "" });
    screen.getByRole("button", { name: "Search" });
  });

  /*
  This test is a demonstration where the API for the component changed a bit to accept a form action function.
  Form prop is not supported yet by vitest - test runner will give a warning and the test will not work
  https://github.com/vercel/next.js/issues/54757

  it("it submits the form", () => {
    const user = userEvent.setup();

    const mockFn: (formData: FormData) => Promise<void> = vi.fn(); 
    render(<CitySearchInput />);

    user.click(screen.getByRole("textbox", { name: "" }));
    user.keyboard("aalborg");
    user.click(screen.getByRole("button", { name: "Search" }));
    expect(mockFn).toHaveBeenCalled();
  });
  */
});
