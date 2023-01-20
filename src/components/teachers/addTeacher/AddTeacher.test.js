import { render, screen } from "@testing-library/react";

import AddTeacher from "./AddTeacher";

describe("AddTeacher component", () => {
  const setup = () => render(<AddTeacher />);

  test("has a button", () => {
    setup();

    const button = screen.getByRole("button", { name: "Spara Lärare" });
    expect(button).toBeEnabled();
  });
});
