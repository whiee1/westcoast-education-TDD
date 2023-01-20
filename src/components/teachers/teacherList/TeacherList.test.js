import { screen, render, logRoles } from "@testing-library/react";

import TeacherList from "./TeacherList";

describe("TeacherList component", () => {
  const setup = () => render(<TeacherList />);

  test("should have a page title", () => {
    setup();
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
  });
  test("with a title of 'Lärare'", () => {
    setup();
    const title = screen.getByRole("heading");

    expect(title).toHaveTextContent(/Lärare/i);
  });
});
