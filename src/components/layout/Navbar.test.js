import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

describe("Navbar component", () => {
  const setup = () => render(<Navbar />, { wrapper: MemoryRouter });

  test("renders", async () => {
    const utils = render(<Navbar />, { wrapper: MemoryRouter });

    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });
  test("have a link to TeacherList", () => {
    setup();

    const link = screen.getByText("Lärare");
    expect(link).toHaveAttribute("href", "/teachers");
  });
});
