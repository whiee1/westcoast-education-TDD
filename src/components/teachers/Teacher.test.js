import { fireEvent, render, screen } from "@testing-library/react";
import Teacher from "./Teacher";

import { BrowserRouter } from "react-router-dom";

describe("Teacher component", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Teacher />
      </BrowserRouter>
    );

  test("have a button", () => {
    setup();
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  test('with text "gå tillbaka"', () => {
    setup();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/gå tillbaka/i);
  });
});
