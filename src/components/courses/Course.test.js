import { render, screen } from "@testing-library/react";
import Course from "./Course";
import { BrowserRouter } from "react-router-dom";

describe("Course component", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Course />
      </BrowserRouter>
    );

  test("have heading with test Om Kursen", () => {
    setup();
    const h2 = screen.getByRole("heading", { name: /om kursen/i });
    expect(h2).toBeInTheDocument();
  });
  test("have a button", () => {
    setup();
    const button = screen.getByRole("button", {
      name: /gå tillbaka/i,
    });

    expect(button).toBeInTheDocument();
    expect(button.firstChild).toHaveAttribute("href", "/courses");
  });
});
