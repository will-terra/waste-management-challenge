import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MainButton } from "../../components/atoms/MainButton";

describe("MainButton Component", () => {
  test("renders button with default props", () => {
    render(<MainButton ariaLabel="Test button">Click me</MainButton>);

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-lightGray");
    expect(button).toHaveAttribute("aria-label", "Test button");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();

    render(
      <MainButton ariaLabel="Click button" onClick={handleClick}>
        Click me
      </MainButton>,
    );

    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies correct styles for blue variant and large size", () => {
    render(
      <MainButton ariaLabel="Blue large button" variant="blue" size="large">
        Blue Large
      </MainButton>,
    );

    const button = screen.getByText("Blue Large");
    expect(button).toHaveClass("bg-lightBlue");
    expect(button).toHaveClass("w-full");
    expect(button).toHaveClass("text-lg");
  });

  test("applies correct styles when disabled", () => {
    render(
      <MainButton ariaLabel="Disabled button" disabled>
        Disabled
      </MainButton>,
    );

    const button = screen.getByText("Disabled");
    expect(button).toHaveClass("cursor-not-allowed");
  });
});
