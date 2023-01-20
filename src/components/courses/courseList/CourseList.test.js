import { screen, render } from "@testing-library/react";

import CourseList from "./CourseList";

describe("CourseList component", () => {
  const setup = () => render(<CourseList />);

  describe("Page layout", () => {
    test("should have a page title", () => {
      setup();
      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });
    test("with a title of 'Kurser'", () => {
      setup();
      const title = screen.getByRole("heading");

      expect(title).toHaveTextContent(/Kurser/i);
    });
  });
});
