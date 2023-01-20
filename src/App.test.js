import App from "./App";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  const setup = () => render(<App />);

  describe("navigating to correct component", () => {
    test('Navigate to "Kurser" on click', async () => {
      setup();
      const user = userEvent.setup();
      await user.click(screen.getByText("Kurser"));
      expect(
        screen.getByRole("heading", { name: "Kurser" })
      ).toBeInTheDocument();
    });
  });
});
