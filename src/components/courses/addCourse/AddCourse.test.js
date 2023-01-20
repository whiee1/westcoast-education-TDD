import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddCourse from "./AddCourse";

describe("AddCourse component", () => {
  const setup = () => render(<AddCourse />);
  describe("Form for adding courses", () => {
    test("has a input field for coursename", () => {
      setup();

      const coursenameInputField = screen.getByLabelText("Kursnamn");

      expect(coursenameInputField).toBeInTheDocument();
    });
  });
});
