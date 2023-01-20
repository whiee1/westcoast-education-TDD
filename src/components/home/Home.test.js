import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Home from "./Home";

describe("Home component", () => {
  const setup = () => render(<Home />);
  test('Navigate to "Kurser" on click', () => {
    setup();

    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("Våra kurser");
  });
});
