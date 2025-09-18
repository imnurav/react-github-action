import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Github Actions text", () => {
  render(<App />);
  expect(screen.getByText(/github actions/i)).toBeInTheDocument();
});

test("basic math works", () => {
  expect(2 + 2).toBe(4);
});

test("string contains substring", () => {
  expect("github actions").toContain("github");
});
